export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  stock: number;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "black-bozo-ski-suits",
    name: "Black Bozo Ski Suit",
    price: 350,
    category: "Ski Suit",
    stock: 10,
    images: ["/products/black-ski-suit.jpg"],
    description:
      "Experience comfort, durability, and standout style in one piece. This design features a 100% polyester outer shell that’s lightweight, smooth, and perfect for everyday wear. Inside, you’ll find a 100% nylon lining that adds an extra layer of comfort and breathability.",
    features: [
      "100% Polyester outer shell",
      "100% Nylon lining",
      "Sublimation printing (colors never crack or fade)",
      "High-density print logo",
      "Premium texture",
    ],
  },
  {
    id: "blue-bozo-ski-suits",
    name: "Blue Bozo Ski Suit",
    price: 350,
    category: "Ski Suit",
    stock: 10,
    images: ["/products/blue-ski-suit.jpg"],
    description:
      "Experience comfort, durability, and standout style in one piece. This design features a 100% polyester outer shell that’s lightweight, smooth, and perfect for everyday wear.",
    features: [
      "100% Polyester outer shell",
      "100% Nylon lining",
      "Sublimation printing",
      "High-density print logo",
    ],
  },
  {
    id: "miami-diamond-tee",
    name: "Miami Diamond Tee",
    price: 65,
    category: "T-SHIRTS",
    stock: 25,
    images: ["/products/miami-diamond-tee.jpg"],
    description:
      "Designed for statement streetwear, this T-shirt features bold, retro-inspired Miami graphics with a modern edge. Crafted from 280 GSM, 100% cotton, it delivers a heavyweight feel with a clean, structured drape.",
    features: [
      "Heavyweight 280 GSM Fabric",
      "100% Pure Cotton",
      "Bold Miami culture graphics",
      "Structured Streetwear Fit",
      "Low Transparency dense fabric",
    ],
  },
  {
    id: "bozo-rugs",
    name: "Bozo Rugs",
    price: 150,
    category: "Accessories",
    stock: 5,
    images: ["/products/bozo-rugs.jpg"],
    description: "Custom Bozo Headstash rugs for your home or studio.",
  },
  // Add more as needed
];
