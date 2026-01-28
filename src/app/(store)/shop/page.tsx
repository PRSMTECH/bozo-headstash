import { getProducts } from "@/lib/config";
import ProductCard from "@/components/ui/ProductCard";
import ShopHero from "@/components/ShopHero";
import Link from "next/link";
import CategoryFilters from "@/components/ui/CategoryFilters";

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category = "" } = await searchParams;
  const products = await getProducts(category);

  const categories = [
    { name: "All", slug: "" },
    { name: "Ski Suits", slug: "ski-suits" },
    { name: "Tees", slug: "tees" },
    { name: "Long Sleeves", slug: "long-sleeves" },
    { name: "Accessories", slug: "accessories" },
    { name: "Limited", slug: "limited" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <ShopHero />

      <div className="container mx-auto px-6 py-12">
        {/* Category Filter Bar */}
        <CategoryFilters categories={categories} activeCategory={category} />

        {/* Product Grid */}
        {products.length > 0 ?
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        : <div className="flex flex-col items-center justify-center py-40 space-y-6">
            <h3 className="text-white text-2xl font-black uppercase tracking-tighter">
              No products found
            </h3>
            <p className="text-neutral-500">
              Try selecting a different category.
            </p>
            <Link
              href="/shop"
              scroll={false}
              className="px-10 py-3 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-black hover:ring-1 hover:ring-white transition-all"
            >
              Clear Filters
            </Link>
          </div>
        }

        {/* Bottom Banner */}
        <div className="mt-40 border-t border-white/5 pt-20">
          <div className="relative overflow-hidden bg-white/5 py-20 px-10 text-center rounded-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-600 via-white to-red-600" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Join the Headstash
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-10 font-medium">
              Sign up for early access to our most exclusive drops and private
              gallery events.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-black border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors"
              />
              <button className="group bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                Join{" "}
                <span className="group-hover:scale-125 transition-transform text-base">
                  🤡
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
