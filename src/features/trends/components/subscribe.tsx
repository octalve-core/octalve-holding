// import Link from "next/link";
// import type { TrendPost } from "../content";

// type BlogCardProps = {
//   post: TrendPost;
// };

// export default function BlogCard({ post }: BlogCardProps) {
//   return (
//     <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
//       <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
//         <span className="rounded-full bg-blue-50 px-3 py-1 text-[#0064E0]">
//           {post.category}
//         </span>
//         <span>{post.publishedAt}</span>
//         <span>{post.readTime}</span>
//       </div>

//       <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
//         {post.title}
//       </h3>

//       <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

//       <div className="mt-6 flex items-center justify-between gap-4">
//         <p className="text-sm font-medium text-slate-700">{post.author}</p>

//         <Link
//           href={`/trends/${post.slug}`}
//           className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:border-slate-400"
//         >
//           Read more
//         </Link>
//       </div>
//     </article>
//   );
// }

export default function TrendsSubscribe() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#0064E0]">
              Stay updated
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Get future insights, updates, and thinking from Octalve.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              This is a simple frontend subscribe block for now. Later, you can
              connect it to your email tool, newsletter platform, CRM, or
              content workflow.
            </p>
          </div>

          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-slate-300 px-5 py-3 text-sm outline-none transition focus:border-[#0064E0]"
            />

            <button
              type="submit"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
