import type { StaticImageData } from "next/image";

import trend1 from "./trend1";
import trend2 from "./trend2";

export type TrendPost = {
  slug: string;
  title: string;
  subheader: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: StaticImageData;
  body: string[];
};

export const trendPosts: TrendPost[] = [trend1, trend2];

export function getTrendBySlug(slug: string) {
  return trendPosts.find((post) => post.slug === slug);
}

export function getOtherTrends(slug: string) {
  return trendPosts.filter((post) => post.slug !== slug);
}
