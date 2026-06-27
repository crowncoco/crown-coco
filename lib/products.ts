export type Product = {
  slug: string;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  badge: string;
  available: boolean;
};

export const products: Product[] = [
  {
    slug: "frozen-grated-coconut",
    name: "Frozen Grated Coconut",
    image: "/images/products/grated-coconut.png",
    description:
      "Fresh frozen grated coconut hygienically prepared from carefully selected coconuts to preserve natural taste, aroma and freshness.",
    shortDescription:
      "Premium frozen grated coconut for everyday cooking.",
    badge: "Best Seller",
    available: true,
  },

  {
    slug: "dry-fish",
    name: "Dry Fish",
    image: "",
    description:
      "Premium quality dry fish. Product page coming soon.",
    shortDescription:
      "Traditional flavour with hygienic packaging.",
    badge: "Coming Soon",
    available: false,
  },

  {
    slug: "dry-prawns",
    name: "Dry Prawns",
    image: "",
    description:
      "Premium quality dry prawns. Product page coming soon.",
    shortDescription:
      "Clean, rich flavour for authentic dishes.",
    badge: "Coming Soon",
    available: false,
  },

  {
    slug: "fresh-cut-vegetables",
    name: "Fresh Cut Vegetables",
    image: "",
    description:
      "Fresh cut vegetables. Product page coming soon.",
    shortDescription:
      "Ready-to-cook vegetables prepared hygienically.",
    badge: "Coming Soon",
    available: false,
  },
];