import Link from "next/link";
import { notFound } from "next/navigation";

import ModelShell from "@/components/models/shared/model-shell";
import { getOtherTrends, getTrendBySlug } from "../content";

type TrendDetailsPageProps = {
  slug: string;
};

export default function TrendDetailsPage({ slug }: TrendDetailsPageProps) {
  const post = getTrendBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getOtherTrends(post.slug).slice(0, 2);

  return (
    <ModelShell>
      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-[#0064E0]">
              {post.category}
            </span>
            <span>{post.publishedAt}</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {post.subheader}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="text-sm font-medium text-slate-700">
              By {post.author}
            </p>

            <Link
              href="/trends"
              className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02]"
            >
              Back to trends
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[980px] px-5 py-16 sm:px-6 lg:px-8">
          <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="space-y-6">
              {post.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-8 text-slate-700 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-8 sm:p-10">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#0064E0]">
                Continue exploring
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
                More from Trends
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Explore more ideas on strategy, websites, branding, and digital
                growth.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="rounded-[28px] border border-slate-200 bg-white p-6"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[#0064E0]">
                      {relatedPost.category}
                    </span>
                    <span>{relatedPost.readTime}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {relatedPost.excerpt}
                  </p>

                  <Link
                    href={`/trends/${relatedPost.slug}`}
                    className="mt-6 inline-flex rounded-full bg-[#0064E0] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
                  >
                    Read article
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/trends"
                className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
              >
                View all trends
              </Link>

              <Link
                href="/start-project"
                className="inline-flex items-center justify-center rounded-full border border-[#0064E0] bg-white px-6 py-3 text-base font-bold !text-[#0064E0] transition hover:scale-105 hover:bg-[#0064E0]/5"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ModelShell>
  );
}
