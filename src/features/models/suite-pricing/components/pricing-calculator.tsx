"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  fxFallback,
  planOrder,
  plans,
  pricingSections,
  type FxMode,
  type PlanKey,
} from "../pricing-data";

const PLAN_STYLES: Record<
  PlanKey,
  {
    accent: string;
    soft: string;
    ring: string;
    dot: string;
    text: string;
    button: string;
  }
> = {
  launch: {
    accent: "#DC2626",
    soft: "bg-red-50",
    ring: "ring-red-100",
    dot: "bg-red-600",
    text: "text-red-600",
    button: "bg-red-600 hover:bg-red-700",
  },
  impact: {
    accent: "#16A34A",
    soft: "bg-green-50",
    ring: "ring-green-100",
    dot: "bg-green-600",
    text: "text-green-600",
    button: "bg-green-600 hover:bg-green-700",
  },
  growth: {
    accent: "#2563EB",
    soft: "bg-blue-50",
    ring: "ring-blue-100",
    dot: "bg-blue-600",
    text: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
};

function formatNGN(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatFX(amount: number, currency: "USD" | "EUR") {
  return new Intl.NumberFormat(currency === "EUR" ? "de-DE" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function CheckIcon({ color }: { color: string }) {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 6L9 17l-5-5"
          stroke={color}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 6L6 18"
          stroke="#F97316"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M6 6l12 12"
          stroke="#F97316"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function PlanHeaderCard({
  planKey,
  fxMode,
  convert,
}: {
  planKey: PlanKey;
  fxMode: FxMode;
  convert: (amount: number) => string | null;
}) {
  const plan = plans[planKey];
  const style = PLAN_STYLES[planKey];

  return (
    <div className="mx-auto flex max-w-[260px] flex-col items-center text-center">
      {plan.badge ? (
        <div
          className={`mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-slate-700 ${style.soft}`}
        >
          {plan.badge}
        </div>
      ) : null}

      <div className="text-sm font-medium text-slate-900">{plan.name}</div>

      <div className="mt-3 text-[18px] font-medium text-slate-900 xl:text-[20px]">
        {formatNGN(plan.price)}
      </div>

      <div className="mt-1 text-sm text-slate-500">/ {plan.periodLabel}</div>

      {fxMode !== "NONE" ? (
        <div className="mt-1 text-xs font-medium text-slate-500">
          ≈ {convert(plan.price)}
        </div>
      ) : null}

      <Link
        href={plan.cta}
        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm transition ${style.button}`}
      >
        Choose Plan <span aria-hidden="true">›</span>
      </Link>
    </div>
  );
}

export default function PricingCalculator() {
  const [fxMode, setFxMode] = useState<FxMode>("NONE");
  const [mobileTab, setMobileTab] = useState<PlanKey>("launch");
  const [fxRates, setFxRates] = useState({
    USD: fxFallback.USD,
    EUR: fxFallback.EUR,
  });
  const [fxMeta, setFxMeta] = useState("Loading live rates…");
  const [selected, setSelected] = useState<Record<PlanKey, boolean>>({
    launch: false,
    impact: false,
    growth: false,
  });

  useEffect(() => {
    let active = true;

    async function loadFxRates() {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/NGN", {
          cache: "no-store",
        });
        const data = await response.json();

        if (
          active &&
          data?.result === "success" &&
          data?.rates?.USD &&
          data?.rates?.EUR
        ) {
          setFxRates({
            USD: data.rates.USD as number,
            EUR: data.rates.EUR as number,
          });
          setFxMeta("Live rates loaded successfully.");
          return;
        }

        if (active) {
          setFxMeta("Live rates unavailable. Using fallback rates.");
        }
      } catch {
        if (active) {
          setFxMeta("Live rates unavailable. Using fallback rates.");
        }
      }
    }

    loadFxRates();

    return () => {
      active = false;
    };
  }, []);

  const selectedKeys = useMemo(
    () => planOrder.filter((key) => selected[key]),
    [selected],
  );

  const quote = useMemo(() => {
    const picked = selectedKeys.map((key) => ({
      key,
      value: plans[key].price,
    }));

    const subtotal = picked.reduce((sum, item) => sum + item.value, 0);
    const sorted = [...picked].sort((a, b) => b.value - a.value);
    const discount = sorted
      .slice(1)
      .reduce((sum, item) => sum + item.value * 0.15, 0);
    const total = subtotal - discount;

    return { subtotal, discount, total };
  }, [selectedKeys]);

  function convert(amount: number) {
    if (fxMode === "USD") return formatFX(amount * fxRates.USD, "USD");
    if (fxMode === "EUR") return formatFX(amount * fxRates.EUR, "EUR");
    return null;
  }

  function togglePlan(key: PlanKey) {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  const selectedNote =
    selectedKeys.length === 0
      ? "No suite selected yet."
      : selectedKeys.length === 1
        ? `Selected: ${plans[selectedKeys[0]].name}`
        : `Selected: ${selectedKeys.map((key) => plans[key].name).join(" + ")} (15% off each additional suite)`;

  const mobilePlan = plans[mobileTab];
  const mobileStyle = PLAN_STYLES[mobileTab];

  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-16 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="rounded-[32px] bg-slate-50 p-5 ring-1 ring-black/5 sm:p-6">
            <div className="text-sm font-medium text-slate-900">
              Instant Quote Builder
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Bundle two or more suites and get{" "}
              <span className="font-medium text-slate-900">15% off</span> each
              additional suite.
            </p>

            <div className="mt-5">
              <label className="text-xs font-medium text-slate-700">
                Show conversion
              </label>
              <select
                value={fxMode}
                onChange={(event) => setFxMode(event.target.value as FxMode)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none focus:ring-4 focus:ring-slate-200"
              >
                <option value="NONE">None (NGN only)</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>

              <div className="mt-2 text-[11px] text-slate-500">{fxMeta}</div>
            </div>

            <div className="mt-5 space-y-3">
              {planOrder.map((key) => {
                const plan = plans[key];
                const active = selected[key];
                const style = PLAN_STYLES[key];

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => togglePlan(key)}
                    className={`flex w-full items-start justify-between gap-4 rounded-2xl bg-white p-4 text-left ring-1 transition ${
                      active
                        ? "shadow-sm ring-slate-900"
                        : "ring-black/5 hover:ring-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-3 w-3 rounded-full ${style.dot}`}
                      />
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {plan.name}
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-600">
                          {plan.shortDescription}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`mt-1 h-5 w-5 rounded-md border transition ${
                        active
                          ? "border-slate-900 bg-slate-900"
                          : "border-slate-300 bg-white"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl bg-white p-4 text-[12px] leading-6 text-slate-600 ring-1 ring-black/5">
              Growth Suite is monthly. Bundle totals treat Growth as the first
              month only.
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-5 shadow-[0_15px_70px_rgba(0,0,0,0.04)] ring-1 ring-black/5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-medium text-slate-900">
                  Quote Summary
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Select suites on the left to see the quote update instantly.
                </div>
              </div>

              <div className="text-right text-xs text-slate-500">
                <div className="font-medium">Discount rule</div>
                <div>15% off every additional suite</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-black/5">
                <div className="text-xs font-medium text-slate-600">
                  Subtotal
                </div>
                <div className="mt-1 text-lg font-medium text-slate-900">
                  {formatNGN(quote.subtotal)}
                </div>
                {fxMode !== "NONE" ? (
                  <div className="mt-1 text-xs font-medium text-slate-500">
                    ≈ {convert(quote.subtotal)}
                  </div>
                ) : null}
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-black/5">
                <div className="text-xs font-medium text-slate-600">
                  Bundle Discount
                </div>
                <div className="mt-1 text-lg font-medium text-slate-900">
                  {formatNGN(quote.discount)}
                </div>
                {fxMode !== "NONE" ? (
                  <div className="mt-1 text-xs font-medium text-slate-500">
                    ≈ {convert(quote.discount)}
                  </div>
                ) : null}
              </div>

              <div className="rounded-2xl bg-slate-900 p-4 ring-1 ring-black/10">
                <div className="text-xs font-medium text-white/70">Total</div>
                <div className="mt-1 text-2xl font-medium text-white">
                  {formatNGN(quote.total)}
                </div>
                {fxMode !== "NONE" ? (
                  <div className="mt-1 text-xs font-medium text-white/70">
                    ≈ {convert(quote.total)}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-5 text-sm font-medium text-slate-700">
              {selectedNote}
            </div>
          </div>
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_15px_70px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] table-fixed border-collapse">
                <colgroup>
                  <col className="w-[40%]" />
                  <col className="w-[20%]" />
                  <col className="w-[20%]" />
                  <col className="w-[20%]" />
                </colgroup>

                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-8 py-8 text-left align-top">
                      <div className="text-sm font-medium text-slate-500">
                        Compare features
                      </div>
                    </th>

                    {planOrder.map((key) => (
                      <th key={key} className="px-6 py-8 text-center align-top">
                        <PlanHeaderCard
                          planKey={key}
                          fxMode={fxMode}
                          convert={convert}
                        />
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {pricingSections.map((section) => (
                    <Fragment key={section.title}>
                      <tr className="bg-slate-50">
                        <td
                          colSpan={4}
                          className="px-8 py-4 text-sm font-medium text-slate-900"
                        >
                          {section.title}
                        </td>
                      </tr>

                      {section.rows.map((row) => (
                        <tr
                          key={`${section.title}-${row.label}`}
                          className="border-t border-slate-100"
                        >
                          <td className="px-8 py-5 text-sm font-medium text-slate-800">
                            {row.label}
                          </td>

                          <td className="px-6 py-5 text-center align-middle">
                            <div className="flex justify-center">
                              {row.launch ? (
                                <CheckIcon color={PLAN_STYLES.launch.accent} />
                              ) : (
                                <CrossIcon />
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-5 text-center align-middle">
                            <div className="flex justify-center">
                              {row.impact ? (
                                <CheckIcon color={PLAN_STYLES.impact.accent} />
                              ) : (
                                <CrossIcon />
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-5 text-center align-middle">
                            <div className="flex justify-center">
                              {row.growth ? (
                                <CheckIcon color={PLAN_STYLES.growth.accent} />
                              ) : (
                                <CrossIcon />
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="rounded-[32px] bg-white p-5 shadow-[0_15px_60px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
            <div className="flex items-center justify-center gap-2 rounded-2xl bg-slate-50 p-2 ring-1 ring-black/5">
              {planOrder.map((key) => {
                const active = key === mobileTab;

                return (
                  <button
                    key={key}
                    onClick={() => setMobileTab(key)}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-white text-slate-900 shadow-sm ring-1 ring-black/5"
                        : "text-slate-600"
                    }`}
                  >
                    {plans[key].name.replace(" Suite", "")}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl bg-slate-50 p-5 ring-1 ring-black/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {mobilePlan.badge ? (
                    <div
                      className={`mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-slate-700 ${mobileStyle.soft}`}
                    >
                      {mobilePlan.badge}
                    </div>
                  ) : null}

                  <div className="text-lg font-medium text-slate-900">
                    {mobilePlan.name}
                  </div>

                  <div className="mt-1 text-sm font-medium text-slate-600">
                    {formatNGN(mobilePlan.price)} / {mobilePlan.periodLabel}
                  </div>

                  {fxMode !== "NONE" ? (
                    <div className="mt-1 text-xs font-medium text-slate-500">
                      ≈ {convert(mobilePlan.price)}
                    </div>
                  ) : null}
                </div>

                <Link
                  href={mobilePlan.cta}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm ${mobileStyle.button}`}
                >
                  Choose Plan
                </Link>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {mobilePlan.shortDescription}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {pricingSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl bg-slate-50 p-4 ring-1 ring-black/5"
                >
                  <div className="text-sm font-medium text-slate-900">
                    {section.title}
                  </div>

                  <ul className="mt-4 space-y-3">
                    {section.rows.map((row) => {
                      const included = row[mobileTab];

                      return (
                        <li key={row.label} className="flex gap-3">
                          <div className="pt-0.5">
                            {included ? (
                              <CheckIcon color={mobileStyle.accent} />
                            ) : (
                              <CrossIcon />
                            )}
                          </div>

                          <div className="text-sm font-medium text-slate-800">
                            {row.label}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
