import { ModelSection } from "@/types/model";

type ModelSectionBlockProps = {
  section: ModelSection;
};

export default function ModelSectionBlock({ section }: ModelSectionBlockProps) {
  return (
    <section className="px-4 py-8 sm:px-6 md:py-10">
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-medium tracking-[-0.03em] text-slate-950 sm:text-3xl">
          {section.title}
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {section.description}
        </p>

        {section.items?.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
