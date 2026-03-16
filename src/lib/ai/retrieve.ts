import { load } from "cheerio";

type SourceConfig = {
  label: string;
  baseUrl: string;
};

type PageChunk = {
  site: string;
  url: string;
  title: string;
  text: string;
  score: number;
};

export type RetrievedSource = {
  site: string;
  title: string;
  url: string;
  path: string;
};

type CachedEntry = {
  expiresAt: number;
  chunks: PageChunk[];
  discoveredSiteBaseUrls: string[];
};

const DEFAULT_SEED_URLS = ["https://octalve.com", "https://octalve.cloud"];

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
  "just",
  "make",
  "help",
  "please",
]);

const CACHE_TTL_MS = Number(process.env.OCTALVE_CRAWL_TTL_MS ?? 1000 * 60 * 5);
const FETCH_TIMEOUT_MS = Number(process.env.OCTALVE_FETCH_TIMEOUT_MS ?? 8000);
const MAX_SITEMAP_FILES = Number(process.env.OCTALVE_MAX_SITEMAP_FILES ?? 10);
const MAX_URLS_PER_SITE = Number(process.env.OCTALVE_MAX_URLS_PER_SITE ?? 18);
const MAX_DISCOVERED_SITES = Number(
  process.env.OCTALVE_MAX_DISCOVERED_SITES ?? 8,
);
const MAX_CHUNKS_PER_SITE = Number(
  process.env.OCTALVE_MAX_CHUNKS_PER_SITE ?? 250,
);

declare global {
  // eslint-disable-next-line no-var
  var __octalve_site_cache__: Map<string, CachedEntry> | undefined;
}

const siteCache =
  global.__octalve_site_cache__ ?? new Map<string, CachedEntry>();

if (!global.__octalve_site_cache__) {
  global.__octalve_site_cache__ = siteCache;
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countOccurrences(haystack: string, needle: string) {
  if (!needle) return 0;
  return haystack.split(needle).length - 1;
}

function extractQueryTerms(query: string) {
  return normalizeText(query)
    .split(" ")
    .filter((term) => term.length > 2 && !STOP_WORDS.has(term));
}

function expandQueryTerms(query: string) {
  const normalized = normalizeText(query);
  const terms = new Set(extractQueryTerms(query));

  const groups: Array<{ match: RegExp; words: string[] }> = [
    {
      match: /\b(chatbot|assistant|ai|automation|bot|receptionist)\b/,
      words: [
        "chatbot",
        "assistant",
        "automation",
        "ai",
        "support",
        "workflow",
        "receptionist",
      ],
    },
    {
      match: /\b(website|web|site|landing|frontend|redesign)\b/,
      words: ["website", "web", "landing", "design", "development", "frontend"],
    },
    {
      match: /\b(brand|branding|logo|identity|rebrand)\b/,
      words: ["branding", "brand", "identity", "logo", "visual", "positioning"],
    },
    {
      match: /\b(strategy|growth|sales|positioning|offer|consult)\b/,
      words: ["strategy", "growth", "sales", "consult", "positioning", "offer"],
    },
    {
      match: /\b(cloud|hosting|server|domain|ssl|email|migration)\b/,
      words: [
        "cloud",
        "hosting",
        "server",
        "domain",
        "ssl",
        "email",
        "migration",
      ],
    },
    {
      match: /\b(system|suite|workflow|crm|operations|process)\b/,
      words: ["suite", "system", "workflow", "operations", "process", "crm"],
    },
  ];

  for (const group of groups) {
    if (group.match.test(normalized)) {
      group.words.forEach((word) => terms.add(word));
    }
  }

  return [...terms];
}

function safeUrl(input: string, base?: string) {
  try {
    return new URL(input, base);
  } catch {
    return null;
  }
}

function normalizeBaseUrl(input: string) {
  const url = safeUrl(input.startsWith("http") ? input : `https://${input}`);
  if (!url) return null;
  return url.origin.replace(/\/$/, "");
}

function normalizePageUrl(input: string, base?: string) {
  const url = safeUrl(input, base);
  if (!url) return null;

  url.hash = "";
  url.search = "";

  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }

  return url.toString();
}

function isOctalveOwnedHost(hostname: string) {
  const parts = hostname.toLowerCase().split(".").filter(Boolean);
  const octalveIndex = parts.lastIndexOf("octalve");

  if (octalveIndex === -1) return false;

  const tail = parts.slice(octalveIndex + 1);
  return tail.length >= 1 && tail.length <= 2;
}

function isOctalveOwnedUrl(input: string) {
  const url = safeUrl(input);
  return !!url && isOctalveOwnedHost(url.hostname);
}

function makeSiteLabel(baseUrl: string) {
  const url = safeUrl(baseUrl);
  const host = url?.hostname.replace(/^www\./, "") ?? baseUrl;

  if (host === "octalve.com") return "Octalve";
  if (host === "octalve.cloud") return "Octalve Cloud";

  const parts = host.split(".");
  const octalveIndex = parts.lastIndexOf("octalve");

  if (octalveIndex > 0) {
    const sub = parts.slice(0, octalveIndex).join(".");
    if (sub) {
      return sub
        .split(".")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
    }
  }

  return host;
}

function getSeedSites(): SourceConfig[] {
  const envUrls = process.env.OCTALVE_AI_SEED_URLS?.split(/[,\n]/)
    .map((value) => value.trim())
    .filter(Boolean);

  const urls = unique(envUrls?.length ? envUrls : DEFAULT_SEED_URLS)
    .map((value) => normalizeBaseUrl(value))
    .filter((value): value is string => !!value)
    .filter((value) => isOctalveOwnedUrl(value));

  return urls.map((baseUrl) => ({
    label: makeSiteLabel(baseUrl),
    baseUrl,
  }));
}

function looksLikeSitemap(url: string) {
  return /sitemap.*\.xml$|\.xml$/i.test(url);
}

function isCrawlablePageUrl(url: string) {
  const parsed = safeUrl(url);
  if (!parsed) return false;

  if (!/^https?:$/i.test(parsed.protocol)) return false;
  if (!isOctalveOwnedHost(parsed.hostname)) return false;
  if (/^\/api(\/|$)/i.test(parsed.pathname)) return false;

  if (
    /\.(png|jpe?g|gif|svg|webp|ico|css|js|mjs|map|json|pdf|zip|gz|woff2?|ttf|eot|mp4|mp3|avi|mov)$/i.test(
      parsed.pathname,
    )
  ) {
    return false;
  }

  return true;
}

function scoreUrlForCrawl(url: string) {
  const parsed = safeUrl(url);
  if (!parsed) return -100;

  const path = parsed.pathname.toLowerCase();
  const segments = path.split("/").filter(Boolean);

  let score = 0;

  if (path === "/" || path === "") score += 24;
  if (
    /\b(service|services|model|models|solution|solutions|pricing|plans?)\b/.test(
      path,
    )
  ) {
    score += 18;
  }
  if (
    /\b(cloud|hosting|domain|email|ssl|security|server|migration)\b/.test(path)
  ) {
    score += 18;
  }
  if (
    /\b(website|branding|strategy|consult|chatbot|automation|system|suite)\b/.test(
      path,
    )
  ) {
    score += 16;
  }
  if (/\b(blog|post|news|privacy|terms|policy|legal|author|tag)\b/.test(path)) {
    score -= 18;
  }

  score -= segments.length * 1.5;

  return score;
}

async function safeFetch(url: string) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: {
      "User-Agent": "OctalveSmartCrawler/1.0",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function extractLocsFromXml(xml: string) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/gi)]
    .map((match) => match[1]?.trim())
    .filter((value): value is string => !!value);
}

function extractSitemapUrlsFromRobots(robotsText: string) {
  return robotsText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^sitemap:/i.test(line))
    .map((line) => line.replace(/^sitemap:\s*/i, "").trim())
    .filter(Boolean);
}

function extractPageLinks(html: string, baseUrl: string) {
  const $ = load(html);
  const links = $("a[href]")
    .map((_, el) => $(el).attr("href")?.trim())
    .get()
    .filter(Boolean)
    .map((href) => normalizePageUrl(href!, baseUrl))
    .filter((value): value is string => !!value);

  return unique(links);
}

async function discoverSiteInventory(baseUrl: string) {
  const pageUrls = new Set<string>([baseUrl]);
  const discoveredSiteBaseUrls = new Set<string>();

  const sitemapQueue: string[] = unique([
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/sitemap_index.xml`,
  ]);

  try {
    const robotsText = await safeFetch(`${baseUrl}/robots.txt`);
    extractSitemapUrlsFromRobots(robotsText).forEach((url) => {
      const normalized = normalizePageUrl(url, baseUrl);
      if (normalized) sitemapQueue.push(normalized);
    });
  } catch {
    // ignore robots issues
  }

  const seenSitemaps = new Set<string>();

  while (sitemapQueue.length > 0 && seenSitemaps.size < MAX_SITEMAP_FILES) {
    const sitemapUrl = sitemapQueue.shift();
    if (!sitemapUrl || seenSitemaps.has(sitemapUrl)) continue;

    seenSitemaps.add(sitemapUrl);

    try {
      const xml = await safeFetch(sitemapUrl);
      const locs = extractLocsFromXml(xml);

      for (const loc of locs) {
        const normalized = normalizePageUrl(loc, baseUrl);
        if (!normalized || !isOctalveOwnedUrl(normalized)) continue;

        const normalizedBase = normalizeBaseUrl(normalized);
        if (normalizedBase) {
          discoveredSiteBaseUrls.add(normalizedBase);
        }

        if (looksLikeSitemap(normalized) && !seenSitemaps.has(normalized)) {
          sitemapQueue.push(normalized);
          continue;
        }

        if (isCrawlablePageUrl(normalized)) {
          pageUrls.add(normalized);
        }
      }
    } catch {
      // ignore sitemap fetch issues
    }
  }

  try {
    const homepageHtml = await safeFetch(baseUrl);
    const links = extractPageLinks(homepageHtml, baseUrl);

    for (const link of links) {
      if (!isOctalveOwnedUrl(link)) continue;

      const normalizedBase = normalizeBaseUrl(link);
      if (normalizedBase) {
        discoveredSiteBaseUrls.add(normalizedBase);
      }

      if (isCrawlablePageUrl(link)) {
        pageUrls.add(link);
      }
    }
  } catch {
    // ignore homepage discovery issues
  }

  const prioritizedUrls = [...pageUrls]
    .sort((a, b) => scoreUrlForCrawl(b) - scoreUrlForCrawl(a))
    .slice(0, MAX_URLS_PER_SITE);

  return {
    pageUrls: prioritizedUrls,
    discoveredSiteBaseUrls: unique([...discoveredSiteBaseUrls]).filter(
      (siteUrl) => siteUrl !== baseUrl,
    ),
  };
}

function htmlToUsefulText(html: string) {
  const $ = load(html);

  $("script, style, noscript, svg, iframe, form, nav, footer").remove();

  const title =
    $("title").first().text().trim() ||
    $("h1").first().text().trim() ||
    $("h2").first().text().trim();

  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() ||
    $('meta[property="og:description"]').attr("content")?.trim() ||
    "";

  const mainRoot = $("main").length
    ? $("main").first()
    : $("article").length
      ? $("article").first()
      : $("body").first();

  const rawPieces = mainRoot
    .find("h1, h2, h3, p, li, blockquote")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)
    .map((value) => value.replace(/\s+/g, " ").trim());

  const dedupedPieces: string[] = [];
  const seen = new Set<string>();

  for (const piece of rawPieces) {
    const normalized = normalizeText(piece);
    if (!normalized || seen.has(normalized)) continue;
    if (piece.length < 2) continue;

    seen.add(normalized);
    dedupedPieces.push(piece);
  }

  const text = [title, metaDescription, ...dedupedPieces]
    .filter(Boolean)
    .join("\n")
    .replace(/\n{2,}/g, "\n")
    .trim();

  return {
    title,
    text,
  };
}

function chunkText(
  site: string,
  url: string,
  title: string,
  text: string,
): PageChunk[] {
  const words = text.split(/\s+/).filter(Boolean);
  const size = 120;
  const overlap = 24;
  const chunks: PageChunk[] = [];

  for (let start = 0; start < words.length; start += size - overlap) {
    const slice = words
      .slice(start, start + size)
      .join(" ")
      .trim();
    if (slice.length < 120) continue;

    chunks.push({
      site,
      url,
      title,
      text: slice,
      score: 0,
    });
  }

  return chunks;
}

function scoreChunk(chunk: PageChunk, query: string) {
  const expandedTerms = expandQueryTerms(query);
  const normalizedChunk = normalizeText(
    `${chunk.title}\n${chunk.text}\n${chunk.url}`,
  );
  const normalizedUrl = normalizeText(chunk.url);
  const normalizedQuery = normalizeText(query);

  let score = 0;
  let matchedTerms = 0;

  for (const term of expandedTerms) {
    const contentHits = countOccurrences(normalizedChunk, term);
    const urlHits = countOccurrences(normalizedUrl, term);

    if (contentHits > 0 || urlHits > 0) matchedTerms += 1;

    score += Math.min(contentHits, 4) * 3;
    score += Math.min(urlHits, 2) * 4;
  }

  score += matchedTerms * 4;

  if (normalizedQuery && normalizedChunk.includes(normalizedQuery)) {
    score += 18;
  }

  if (
    /\b(service|solution|plan|pricing|model|benefit|process|workflow|growth|automation)\b/.test(
      normalizedChunk,
    )
  ) {
    score += 3;
  }

  if (/\b(blog|post|news|privacy|terms|policy|legal)\b/.test(normalizedUrl)) {
    score -= 10;
  }

  if (normalizedChunk.includes("octalve")) {
    score += 1;
  }

  return score;
}

function titleFromPath(path: string) {
  if (!path || path === "/") return "Home";

  return (
    path
      .replace(/^\/+/, "")
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()) ?? "Page"
  );
}

function pathFromUrl(url: string) {
  const parsed = safeUrl(url);

  if (!parsed) return "/";

  return parsed.pathname === "" ? "/" : parsed.pathname;
}

async function fetchSiteChunks(source: SourceConfig) {
  const cacheKey = source.baseUrl;
  const cached = siteCache.get(cacheKey);

  if (cached && cached.expiresAt > Date.now()) {
    return cached;
  }

  const inventory = await discoverSiteInventory(source.baseUrl);

  const pages = await Promise.allSettled(
    inventory.pageUrls.map(async (url) => {
      const html = await safeFetch(url);
      const { title, text } = htmlToUsefulText(html);
      return chunkText(source.label, url, title, text);
    }),
  );

  const chunks = pages
    .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
    .slice(0, MAX_CHUNKS_PER_SITE);

  const entry: CachedEntry = {
    expiresAt: Date.now() + CACHE_TTL_MS,
    chunks,
    discoveredSiteBaseUrls: inventory.discoveredSiteBaseUrls,
  };

  siteCache.set(cacheKey, entry);
  return entry;
}

export async function retrieveWebsiteContext(query: string) {
  const seedSites = getSeedSites();
  const queue = [...seedSites];
  const visitedBaseUrls = new Set<string>();
  const allChunks: PageChunk[] = [];

  while (queue.length > 0 && visitedBaseUrls.size < MAX_DISCOVERED_SITES) {
    const current = queue.shift();
    if (!current || visitedBaseUrls.has(current.baseUrl)) continue;

    visitedBaseUrls.add(current.baseUrl);

    const result = await fetchSiteChunks(current);
    allChunks.push(...result.chunks);

    for (const discoveredBaseUrl of result.discoveredSiteBaseUrls) {
      if (visitedBaseUrls.has(discoveredBaseUrl)) continue;
      if (!isOctalveOwnedUrl(discoveredBaseUrl)) continue;

      queue.push({
        label: makeSiteLabel(discoveredBaseUrl),
        baseUrl: discoveredBaseUrl,
      });
    }
  }

  const ranked = allChunks
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(chunk, query),
    }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const context = ranked
    .map(
      (chunk, index) =>
        `[Source ${index + 1}] ${chunk.site} | ${chunk.title || "Page"} | ${chunk.url}\n${chunk.text}`,
    )
    .join("\n\n");

  const sourceMap = new Map<string, RetrievedSource>();

  for (const chunk of ranked) {
    if (sourceMap.has(chunk.url)) continue;

    const path = pathFromUrl(chunk.url);

    sourceMap.set(chunk.url, {
      site: chunk.site,
      title: chunk.title?.trim() || titleFromPath(path),
      url: chunk.url,
      path,
    });
  }

  const sources = [...sourceMap.values()].slice(0, 8);

  return {
    context,
    sources,
    strongMatch:
      ranked.length > 0 &&
      (ranked[0].score >= 12 ||
        (ranked.length > 1 && ranked[0].score + ranked[1].score >= 20)),
  };
}
