"use client";

const letters = ["-", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

type ModelsHeroProps = {
  activeLetter: string;
  onLetterChange: (letter: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
};

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ModelsHero({
  activeLetter,
  onLetterChange,
  searchQuery,
  onSearchChange,
  resultCount,
  totalCount,
}: ModelsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#0064E0]/10 blur-3xl" />
        <div className="absolute right-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#29BE3E]/10 blur-3xl" />
        <div className="absolute bottom-[-220px] left-1/2 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[#EAF3FF] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[1040px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0064E0]">
            Octalve index
          </p>

          <h1 className="mt-5 text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.06em] text-[#000A16] sm:text-6xl lg:text-[5.2rem]">
            <span className="text-[#0064E0]">A-Z Index</span> of Octalve
            <br className="hidden md:block" /> Models, Products & Systems.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Find the right Octalve model, product, platform, or support system
            for strategy, launch, websites, software, cloud infrastructure,
            workspace, automation, and business growth.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {letters.map((letter) => {
              const active = activeLetter === letter;

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => onLetterChange(letter)}
                  className="inline-flex h-12 min-w-12 items-center justify-center rounded-lg border px-4 text-base font-bold transition hover:-translate-y-0.5 hover:border-[#0064E0] hover:bg-[#EEF6FF] hover:text-[#0064E0]"
                  style={{
                    backgroundColor: active ? "#0064E0" : "#FFFFFF",
                    borderColor: active ? "#0064E0" : "#CBD5E1",
                    color: active ? "#FFFFFF" : "#000A16",
                    boxShadow: active
                      ? "0 12px 24px rgba(0,100,224,0.18)"
                      : "none",
                  }}
                  aria-pressed={active}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          <div className="relative mx-auto mt-10 max-w-4xl">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </span>

            <input
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              type="search"
              placeholder="Search for Consult, Cloud, Suite, software, hosting, strategy..."
              className="h-16 w-full rounded-xl border border-slate-300 bg-white pl-14 pr-5 text-base font-medium text-[#000A16] outline-none transition placeholder:text-slate-400 focus:border-[#0064E0] focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <p className="mt-9 text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#000A16]">
            {resultCount} result{resultCount === 1 ? "" : "s"} found
            <span className="mx-2 text-slate-300">/</span>
            {totalCount} total
          </p>
        </div>
      </div>
    </section>
  );
}
