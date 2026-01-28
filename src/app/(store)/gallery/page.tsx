import { getCollections, getProducts } from "@/lib/config";
import { getImageUrl } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export default async function GalleryPage() {
  const collections = await getCollections();
  const products = await getProducts();

  // Extract all unique gallery images from products
  const allGalleryImages = Array.from(
    new Set(products.flatMap((p) => p.galleryImages || [])),
  ).slice(0, 12); // Limit to top 12 for gallery

  return (
    <div className="container mx-auto px-6 py-12 space-y-32">
      <header className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          The{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-900">
            Gallery
          </span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Explore our visual archive and latest drops.
        </p>
      </header>

      {/* Collections Section */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/5 pb-4">
          Core Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Link
              href={`/shop/${collection.slug}`}
              key={collection.id}
              className={`relative group overflow-hidden block aspect-video ${index === 0 ? "md:col-span-2 aspect-21/9" : ""}`}
            >
              <div className="absolute inset-0 bg-neutral-900">
                <Image
                  src={getImageUrl(collection.image)}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                  {collection.title}
                </h2>
                <p className="text-red-500 font-bold tracking-widest text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  View Collection &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Lifestyle lookbook section */}
      {allGalleryImages.length > 0 && (
        <section className="space-y-12 pb-24">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/5 pb-4">
                Lifestyle Archive
              </h2>
              <p className="text-neutral-500 mt-4 max-w-xl">
                A raw look at the Bozo Headstash movement. Featuring shots from
                our community and behind-the-scenes moments.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allGalleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden bg-neutral-900 aspect-square border border-white/5 transition-all duration-500 hover:border-red-600/50 ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={getImageUrl(image)}
                  alt="Gallery Impression"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
