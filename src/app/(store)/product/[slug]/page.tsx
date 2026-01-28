import { getProductBySlug, getProducts } from "@/lib/config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductGallery from "@/components/ui/ProductGallery";
import ProductDetails from "@/components/ui/ProductDetails";
import ProductCard from "@/components/ui/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 lg:py-24">
        {/* Navigation */}
        <div className="mb-12">
          <Link
            href="/shop"
            className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-all uppercase text-[10px] font-bold tracking-[0.4em]"
          >
            <div className="p-2 border border-white/5 group-hover:border-white/20 transition-colors">
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </div>
            Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Gallery Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ProductGallery
              images={product.images}
              name={product.name}
              video={product.video}
            />
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32 lg:h-[calc(100vh-160px)]">
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-32 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-600 mb-4 block">
                  Complete the look
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
                  Related Drops
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-xs font-bold uppercase tracking-widest border-b border-white/20 hover:border-white transition-colors pb-2"
              >
                View All Items
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
