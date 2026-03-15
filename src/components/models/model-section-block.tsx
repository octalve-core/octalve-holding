import type { ModelSection } from "@/types/model";

type ModelSectionBlockProps = {
  section: ModelSection;
};

export default function ModelSectionBlock({ section }: ModelSectionBlockProps) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        {section.eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
          {section.title}
        </h2>

        {section.description && (
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {section.description}
          </p>
        )}

        {section.content && (
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            {section.content}
          </p>
        )}

        {section.items && section.items.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {section.items.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <div
                    key={`${item}-${index}`}
                    className="rounded-3xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="text-lg font-medium text-slate-950">
                      {item}
                    </h3>
                  </div>
                );
              }

              return (
                <div
                  key={item.title || item.label || item.href || index}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  {(item.label || item.title) && (
                    <h3 className="text-lg font-medium text-slate-950">
                      {item.label ?? item.title}
                    </h3>
                  )}

                  {item.description && (
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {item.description}
                    </p>
                  )}

                  {item.href && (
                    <a
                      href={item.href}
                      className="mt-4 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
