export type ModelCTA = {
  label: string;
  href: string;
};

export type LegacyModelCTA = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type ModelNavItem = {
  label: string;
  href: string;
};

export type ModelStat = {
  label: string;
  value: string;
};

export type ModelConfig = {
  slug: string;
  name: string;
  eyebrow?: string;
  title: string;
  description: string;

  seoTitle?: string;
  seoDescription?: string;

  cta?: LegacyModelCTA;
  primaryCta?: ModelCTA;
  secondaryCta?: ModelCTA;

  navItems?: ModelNavItem[];
  stats?: ModelStat[];
};
