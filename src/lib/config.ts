import { Product, Collection } from "./types";

const IS_DEV = process.env.NODE_ENV === "development";

// This function abstracts the image source
// In Dev: calls /api/local-image/...
// In Prod: calls Supabase Storage
export const getImageUrl = (path: string) => {
  if (IS_DEV) {
    return `/api/local-image/${path}`;
  }
  return `https://qewgfglkxmngvxezbern.supabase.co/storage/v1/object/public/Bozo-Headstash/${path}`;
};

// Mock Data derived from the folder structure provided
export const COLLECTIONS: Collection[] = [
  {
    id: "1",
    title: "Ski Suits",
    slug: "ski-suits",
    image: "Black_bozo_ski_suits/DRG7362-Edit.jpg",
  },
  { id: "2", title: "Tees", slug: "tees", image: "BOZO_SKATE_TEE/1.png" },
  {
    id: "3",
    title: "Long Sleeves",
    slug: "long-sleeves",
    image: "SX_MONEY_DRUGS_LONG_SLEEVE_(Black)/4.png",
  },
  {
    id: "4",
    title: "Accessories",
    slug: "accessories",
    image: "Bozo_rugs/WhatsAppImage2026-01-01at1.29.20AM.jpg",
  },
  {
    id: "5",
    title: "Limited Edition",
    slug: "limited",
    image:
      "Limited_edition_Sauce_walka_plush_toy/1_141c51a9-da95-40a1-9a8b-e8e32bfd5bf5.png",
  },
];

export const PRODUCTS: Product[] = [
  // Ski Suits
  {
    id: "s1",
    name: "Black Bozo Ski Suit",
    slug: "black-bozo-ski-suit",
    category: "ski-suits",
    price: 350,
    description: "Premium black ski suit with Bozo branding.",
    images: [
      "Black_bozo_ski_suits/DRG7362-Edit.jpg",
      "Black_bozo_ski_suits/DRG7325.jpg",
    ],
    video: "/videos/background.mp4",
  },
  {
    id: "s2",
    name: "Blue Bozo Ski Suit",
    slug: "blue-bozo-ski-suit",
    category: "ski-suits",
    price: 350,
    description: "Premium blue ski suit with Bozo branding.",
    images: [
      "Blue_bozo_ski_suits/DRG7283-Edit.jpg",
      "Blue_bozo_ski_suits/Blue_suit.jpg",
    ],
    video: "/videos/background.mp4",
  },
  {
    id: "s3",
    name: "Red Bozo Ski Suit",
    slug: "red-bozo-ski-suit",
    category: "ski-suits",
    price: 350,
    description: "Premium red ski suit with Bozo branding.",
    images: [
      "Red_bozo_ski_suit/DRG7264-Edit.jpg",
      "Red_bozo_ski_suit/redsuit.jpg",
    ],
    video: "/videos/background.mp4",
  },
  // Tees
  {
    id: "t1",
    name: "Bozo Skate Tee",
    slug: "bozo-skate-tee",
    category: "tees",
    price: 45,
    description: "Classic fit skate tee.",
    images: [
      "BOZO_SKATE_TEE/1.png",
      "BOZO_SKATE_TEE/WhatsAppImage2025-11-01at9.02.38PM_16_copy.png",
    ],
  },
  {
    id: "t2",
    name: "Bozo Lucky 7 Tee",
    slug: "bozos-lucky-7-tee",
    category: "tees",
    price: 45,
    description: "Lucky number 7.",
    images: ["BOZO’S_LUCKY_7_TEE/3.png", "BOZO’S_LUCKY_7_TEE/2.png"],
  },
  {
    id: "t3",
    name: "Bozo Yacht Club Tee",
    slug: "bozo-yacht-club-tee",
    category: "tees",
    price: 45,
    description: "Join the club.",
    images: [
      "Bozo_Yacht_Club_Tee/1_f8d921c0-3915-463b-b214-1c01077e3a22.png",
      "Bozo_Yacht_Club_Tee/2_5ada88dd-2b48-40fa-a627-55e884df3ea7.png",
    ],
  },
  // Long Sleeves
  {
    id: "l1",
    name: "Money Drugs Long Sleeve (Black)",
    slug: "money-drugs-black",
    category: "long-sleeves",
    price: 65,
    description: "Long sleeve graphic tee.",
    images: [
      "SX_MONEY_DRUGS_LONG_SLEEVE_(Black)/4.png",
      "SX_MONEY_DRUGS_LONG_SLEEVE_(Black)/q1.png",
    ],
  },
  // Accessories
  {
    id: "a1",
    name: "Bozo Rug",
    slug: "bozo-rug",
    category: "accessories",
    price: 120,
    description: "Custom cut pile rug.",
    images: [
      "Bozo_rugs/WhatsAppImage2026-01-01at1.29.20AM.jpg",
      "Bozo_rugs/WhatsAppImage2026-01-01at1.29.20AM_1.jpg",
    ],
  },
  {
    id: "a2",
    name: "Sauce Walka Plush",
    slug: "sauce-walka-plush",
    category: "limited",
    price: 80,
    description: "Limited edition plush toy.",
    images: [
      "Limited_edition_Sauce_walka_plush_toy/1_141c51a9-da95-40a1-9a8b-e8e32bfd5bf5.png",
      "Limited_edition_Sauce_walka_plush_toy/2_a805083d-1490-477c-aeb9-a7b9b3763e1d.png",
    ],
  },
];

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  // In a real app, this would fetch from Supabase if !IS_DEV
  // For now, we return the mock data based on the plan instructions for "local config"

  // NOTE: This is where we would switch:
  /*
  if (!IS_DEV) {
    const { data } = await supabase.from('products').select('*');
    return data;
  }
  */

  if (categorySlug) {
    return PRODUCTS.filter((p) => p.category === categorySlug);
  }
  return PRODUCTS;
}

export async function getCollections(): Promise<Collection[]> {
  /*
  if (!IS_DEV) {
    const { data } = await supabase.from('collections').select('*');
    return data;
  }
  */
  return COLLECTIONS;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  /*
  if (!IS_DEV) {
    const { data } = await supabase.from('products').select('*').eq('slug', slug).single();
    return data;
  }
  */
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
