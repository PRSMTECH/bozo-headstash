export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  galleryImages?: string[];
  stock: number;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "red-bozo-ski-suit",
    name: "Red Bozo Ski Suit",
    price: 350,
    category: "Ski Suit",
    stock: 16,
    images: [
      "/products/Red bozo ski suit_12.png",
      "/products/Red bozo ski suit_13.jpg",
      "/products/Red bozo ski suit_14.jpg",
      "/products/Red bozo ski suit_15.jpg",
      "/products/Red bozo ski suit_16.jpg",
      "/products/Red bozo ski suit_17.jpg",
      "/products/Red bozo ski suit_18.jpg",
      "/products/Red bozo ski suit_19.jpg",
      "/products/Red bozo ski suit_20.jpg",
      "/products/Red bozo ski suit_21.jpg",
    ],
    galleryImages: [
      "/products/Instagram post 1_26.png",
      "/products/Instagram post 2_27.jpg",
      "/products/Instagram post 3_28.png",
      "/products/Instagram post 4_29.jpg",
      "/products/Instagram post 5_30.png",
      "/products/slider image slider_item_6dXx3y_24.png",
    ],
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
    id: "black-bozo-ski-suits",
    name: "Black Bozo Ski Suit",
    price: 350,
    category: "Ski Suit",
    stock: 14,
    images: [
      "/products/Black bozo ski suits_16.jpg",
      "/products/Black bozo ski suits_17.jpg",
      "/products/Black bozo ski suits_18.jpg",
      "/products/Black bozo ski suits_19.jpg",
      "/products/Black bozo ski suits_20.jpg",
      "/products/Black bozo ski suits_21.jpg",
      "/products/Black bozo ski suits_22.jpg",
      "/products/Black bozo ski suits_23.jpg",
      "/products/Black bozo ski suits_24.jpg",
      "/products/Black bozo ski suits_25.jpg",
    ],
    galleryImages: [
      "/products/Instagram post 1_31.png",
      "/products/Instagram post 2_32.jpg",
      "/products/Instagram post 3_33.png",
      "/products/Instagram post 4_34.jpg",
      "/products/Instagram post 5_35.png",
      "/products/slider image slider_item_fDqYgH_30.png",
    ],
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
    stock: 12,
    images: [
      "/products/Blue bozo ski suits_14.jpg",
      "/products/Blue bozo ski suits_15.jpg",
      "/products/Blue bozo ski suits_16.jpg",
      "/products/Blue bozo ski suits_17.jpg",
      "/products/Blue bozo ski suits_18.jpg",
      "/products/Blue bozo ski suits_19.jpg",
      "/products/Blue bozo ski suits_20.jpg",
      "/products/Blue bozo ski suits_21.jpg",
      "/products/Blue bozo ski suits_22.jpg",
      "/products/Blue bozo ski suits_23.jpg",
    ],
    galleryImages: [
      "/products/Instagram post 1_28.png",
      "/products/Instagram post 2_29.png",
      "/products/Instagram post 3_30.png",
      "/products/Instagram post 4_31.png",
      "/products/Instagram post 5_32.png",
      "/products/slider image slider_item_6dXx3y_27.png",
    ],
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
    images: ["/products/Miami Girls Tee_50.png"],
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
    images: ["/products/Bozo rugs_52.jpg"],
    description:
      "Custom Bozo Headstash rugs for your home or studio. Bring bold character and street-art energy into your space.",
  },
];
