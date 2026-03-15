// export type ModelSlug =
//   | "node"
//   | "suite"
//   | "consult"
//   | "lab"
//   | "leap"
//   | "vault"
//   | "cloud"
//   | "one";

// export type ModelCTA = {
//   label: string;
//   href: string;
// };

// export type LegacyModelCTA = {
//   primaryLabel: string;
//   primaryHref: string;
//   secondaryLabel?: string;
//   secondaryHref?: string;
// };

// export type ModelNavItem = {
//   label: string;
//   href: string;
// };

// export type ModelStat = {
//   label: string;
//   value: string;
// };

// export type ModelSectionItem =
//   | string
//   | {
//       title?: string;
//       description?: string;
//       label?: string;
//       href?: string;
//     };

// export type ModelSection = {
//   id?: string;
//   eyebrow?: string;
//   title?: string;
//   description?: string;
//   content?: string;
//   items?: ModelSectionItem[];

//   cta?: LegacyModelCTA;
//   primaryCta?: ModelCTA;
//   secondaryCta?: ModelCTA;

//   [key: string]: unknown;
// };

// export type ModelConfig = {
//   slug: ModelSlug;
//   name: string;
//   shortName?: string;
//   subdomain?: string;

//   eyebrow?: string;

//   title?: string;
//   description?: string;

//   heroTitle?: string;
//   heroDescription?: string;

//   seoTitle?: string;
//   seoDescription?: string;

//   cta?: LegacyModelCTA;
//   primaryCta?: ModelCTA;
//   secondaryCta?: ModelCTA;

//   navItems?: ModelNavItem[];
//   stats?: ModelStat[];
//   sections?: ModelSection[];

//   [key: string]: unknown;
// };

export type ModelSlug =
  | "node"
  | "suite"
  | "consult"
  | "lab"
  | "leap"
  | "vault"
  | "cloud"
  | "one";

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

export type ModelSectionItem = {
  title: string;
  description?: string;
  label?: string;
  href?: string;
};

export type LegacyModelSectionItem = string | ModelSectionItem;

export type LegacyModelSection = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  content?: string;
  items?: LegacyModelSectionItem[];

  cta?: LegacyModelCTA;
  primaryCta?: ModelCTA;
  secondaryCta?: ModelCTA;

  [key: string]: unknown;
};

export type ModelSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  content?: string;
  items?: ModelSectionItem[];

  primaryCta?: ModelCTA;
  secondaryCta?: ModelCTA;

  [key: string]: unknown;
};

export type LegacyModelConfig = {
  slug: ModelSlug;
  name: string;
  shortName?: string;
  subdomain?: string;

  eyebrow?: string;

  title?: string;
  description?: string;

  heroTitle?: string;
  heroDescription?: string;

  seoTitle?: string;
  seoDescription?: string;

  cta?: LegacyModelCTA;
  primaryCta?: ModelCTA;
  secondaryCta?: ModelCTA;

  navItems?: ModelNavItem[];
  stats?: ModelStat[];
  sections?: LegacyModelSection[];

  [key: string]: unknown;
};

export type ModelConfig = {
  slug: ModelSlug;
  name: string;
  shortName?: string;
  subdomain?: string;

  eyebrow?: string;
  title: string;
  description: string;

  seoTitle: string;
  seoDescription: string;

  primaryCta: ModelCTA;
  secondaryCta?: ModelCTA;

  navItems?: ModelNavItem[];
  stats?: ModelStat[];
  sections?: ModelSection[];

  [key: string]: unknown;
};
