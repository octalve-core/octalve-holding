export type ModelCTA = {
  label: string;
  href: string;
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

  primaryCta?: ModelCTA;
  secondaryCta?: ModelCTA;
  navItems?: ModelNavItem[];
  stats?: ModelStat[];
};
