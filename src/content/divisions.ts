export type Division = {
  index: string;
  name: string;
  slug: string;
  philosophy: string;
};

export const divisions: Division[] = [
  {
    index: "01",
    name: "Enterprise",
    slug: "enterprise",
    philosophy:
      "Building organizations capable of creating durable economic and technological value.",
  },
  {
    index: "02",
    name: "Capital",
    slug: "capital",
    philosophy:
      "Allocating resources toward assets, people, and institutions worthy of compounding.",
  },
  {
    index: "03",
    name: "Philanthropy",
    slug: "philanthropy",
    philosophy: "Turning prosperity into enduring service.",
  },
  {
    index: "04",
    name: "Knowledge",
    slug: "knowledge",
    philosophy:
      "Studying questions whose importance exceeds their novelty.",
  },
  {
    index: "05",
    name: "Education",
    slug: "education",
    philosophy:
      "Transmitting judgment, capability, and knowledge across generations.",
  },
  {
    index: "06",
    name: "Faith",
    slug: "faith",
    philosophy:
      "Placing worldly achievement within a larger moral and metaphysical horizon.",
  },
  {
    index: "07",
    name: "The Library",
    slug: "library",
    philosophy:
      "Preserving ideas that should not disappear beneath tomorrow's information.",
  },
];
