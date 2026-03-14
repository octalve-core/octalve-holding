import { load } from "cheerio";

type SourceConfig = {
  label: string;
  baseUrl: string;
};

type PageChunk = {
  site: string;
  url: string;
  text: string;
  score: number;
};

const SOURCE_SITES: SourceConfig[] = [
  { label: "Octalve", baseUrl: "https://octalve.com" },
  { label: "Suite", baseUrl: "https://suite.octalve.com" },
  { label: "Cloud", baseUrl: "https://octalve.cloud" },
  { label: "Vault", baseUrl: "https://vault.octalve.com" },
];

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "from",
  "your",
  "have",
  "what",
  "about",
  "into",
  "our",
  "you",
  "are",
  "can",
  "how",
  "who",
  "why",
  "when",
  "where",
  "their",
  "them",
  "will",
  "does",
  "need",
  "want",
  "tell",
  "more",
  "like",
]);

type CachedEntry = {
  expiresAt: number;
  chunks: PageChunk[];
};

const CACHE_TTL_MS = 1000 * 60 * 10;

declare global {
  // eslint-disable-next-line no-var
  var __octalve_site_cache__: Map<string, CachedEntry> | undefined;
}

const siteCache =
  global.__octalve_site_cache__ ?? new Map<string, CachedEntry>();
if (!global.__octalve_site_cache__) global.__octalve_site_cache__ = siteCache;

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractQueryTerms(query: string) {
  return normalizeText(query)
    .split(" ")
    .filter((term) => term.length > 2 && !STOP_WORDS.has(term));
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}

async function safeFetch(url: string) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(8000),
    headers: {
      "User-Agent": "OctalveBot/1.0",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function getSitemapUrls(baseUrl: string) {
  try {
    const xml = await safeFetch(`${baseUrl.replace(/\/$/, "")}/sitemap.xml`);
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    const sameSite = matches.filter((url) => url.startsWith(baseUrl));
    return unique(sameSite).slice(0, 12);
  } catch {
    return [baseUrl];
  }
}

function htmlToUsefulText(html: string) {
  const $ = load(html);

  $("script, style, noscript, svg, iframe, form").remove();

  const title = $("title").first().text().trim();
  const candidates = $("main, article, body")
    .first()
    .find("h1, h2, h3, p, li")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean);

  const text = [title, ...candidates].join("\n");
  return text.replace(/\s+/g, " ").trim();
}

function chunkText(site: string, url: string, text: string): PageChunk[] {
  const words = text.split(/\s+/).filter(Boolean);
  const size = 160;
  const overlap = 35;
  const chunks: PageChunk[] = [];

  for (let start = 0; start < words.length; start += size - overlap) {
    const slice = words
      .slice(start, start + size)
      .join(" ")
      .trim();
    if (slice.length < 140) continue;

    chunks.push({
      site,
      url,
      text: slice,
      score: 0,
    });
  }

  return chunks;
}

function scoreChunk(chunk: string, query: string) {
  const terms = extractQueryTerms(query);
  const normalizedChunk = normalizeText(chunk);
  const normalizedQuery = normalizeText(query);

  let score = 0;

  for (const term of terms) {
    const occurrences = normalizedChunk.split(term).length - 1;
    score += occurrences * 3;
  }

  if (normalizedChunk.includes(normalizedQuery)) score += 12;

  if (
    normalizedChunk.includes("octalve") ||
    normalizedChunk.includes("suite") ||
    normalizedChunk.includes("cloud") ||
    normalizedChunk.includes("vault")
  ) {
    score += 1;
  }

  return score;
}

async function fetchSiteChunks(source: SourceConfig) {
  const cacheKey = source.baseUrl;
  const cached = siteCache.get(cacheKey);

  if (cached && cached.expiresAt > Date.now()) {
    return cached.chunks;
  }

  const urls = await getSitemapUrls(source.baseUrl);
  const pages = await Promise.allSettled(
    urls.map(async (url) => {
      const html = await safeFetch(url);
      const text = htmlToUsefulText(html);
      return chunkText(source.label, url, text);
    }),
  );

  const chunks = pages
    .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
    .slice(0, 300);

  siteCache.set(cacheKey, {
    expiresAt: Date.now() + CACHE_TTL_MS,
    chunks,
  });

  return chunks;
}

export async function retrieveWebsiteContext(query: string) {
  const allChunks = (
    await Promise.all(SOURCE_SITES.map((site) => fetchSiteChunks(site)))
  ).flat();

  const ranked = allChunks
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(chunk.text, query),
    }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const context = ranked
    .map(
      (chunk, index) =>
        `[Source ${index + 1}] ${chunk.site} | ${chunk.url}\n${chunk.text}`,
    )
    .join("\n\n");

  const sources = unique(ranked.map((chunk) => chunk.url)).slice(0, 6);

  return {
    context,
    sources,
    strongMatch: ranked.length > 0 && ranked[0].score >= 6,
  };
}
