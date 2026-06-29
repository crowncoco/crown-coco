export type Product = {
  slug: string;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  badge: string;
  available: boolean;
  button: string;

  category: string;

  weight: string;
  ingredients: string;
  idealFor: string[];
  features: string[];
};

export const products: Product[] = [
  
{
  slug: "frozen-grated-coconut",
  name: "Frozen Grated Coconut",

  image: "/images/products/grated-coconut.png",

  description:
    "Freshly grated premium coconut, hygienically packed and immediately frozen to preserve its natural taste, aroma, and freshness.",

  shortDescription:
    "Premium frozen grated coconut for everyday cooking.",

  badge: "Best Seller",

  available: true,

  button: "Order Now",
  category: "Frozen Coconut",

  weight: "200 g",

  ingredients: "100% Fresh Coconut",

  idealFor: [
    "Curries",
    "Chutneys",
    "Desserts",
    "Everyday Cooking",
  ],

  features: [
    "100% Fresh Coconut",
    "No Added Preservatives",
    "Hygienically Packed",
    "Frozen for Freshness",
  ],
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
    button: "Coming Soon",
    category: "Dry Fish",
    weight: "",

ingredients: "",

idealFor: [],

features: [],
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
    button: "Coming Soon",
    category: "Dry Prawns",
    weight: "",

ingredients: "",

idealFor: [],

features: [],
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
    button: "Coming Soon",
    category: "Vegetables",
    weight: "",

ingredients: "",

idealFor: [],

features: [],
  },
];