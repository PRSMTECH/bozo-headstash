import { getProducts, PRODUCTS } from "@/lib/config";
import ProductCard from "@/components/ui/ProductCard";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  // Unique categories
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const products = await getProducts(category);

  if (!products.length) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white break-words">
          {category.replace("-", " ")}
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg capitalize">
          Exclusive {category.replace("-", " ")} collection.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
