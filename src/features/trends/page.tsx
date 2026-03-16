// import ModelShell from "@/components/models/shared/model-shell";

// import TrendsHero from "./components/hero";
// import BlogCard from "./components/blog-card";
// import TrendsSubscribe from "./components/subscribe";
// import { trendPosts } from "./content";

// export default function TrendsPage() {
//   return (
//     <ModelShell>
//       <TrendsHero />

//       <section id="trends-list" className="bg-[#F8FAFC]">
//         <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
//           <div className="max-w-2xl">
//             <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
//               Recent trend posts
//             </h2>
//             <p className="mt-4 text-base leading-7 text-slate-600">
//               A growing collection of insights on strategy, branding, websites,
//               digital systems, and product thinking.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-6 lg:grid-cols-2">
//             {trendPosts.map((post) => (
//               <BlogCard key={post.slug} post={post} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <TrendsSubscribe />
//     </ModelShell>
//   );
// }

import ModelShell from "@/components/models/shared/model-shell";

import TrendsHero from "./components/hero";
import BlogCard from "./components/blog-card";
import TrendsSubscribe from "./components/subscribe";
import { trendPosts } from "./content";

export default function TrendsPage() {
  return (
    <ModelShell>
      <TrendsHero />

      <section id="trends-list" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Recent trend posts
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A growing collection of insights on strategy, branding, websites,
              digital systems, and product thinking.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {trendPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <TrendsSubscribe />
    </ModelShell>
  );
}
