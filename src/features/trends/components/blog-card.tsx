import Image from "next/image";
import Link from "next/link";
import type { TrendPost } from "../content";

type BlogCardProps = {
  post: TrendPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]">
      <Link href={`/trends/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
        </div>
      </Link>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[#0064E0]">
            {post.category}
          </span>
          <span>{post.publishedAt}</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
          <Link
            href={`/trends/${post.slug}`}
            className="transition hover:text-[#0064E0]"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <p className="text-sm font-medium text-slate-700">{post.author}</p>

          <Link
            href={`/trends/${post.slug}`}
            className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02]"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
