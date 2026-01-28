export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[]; // URLs or paths
  video?: string; // Optional video URL
  galleryImages?: string[]; // Optional extra gallery images
  slug: string;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  image: string; // Cover image
}
