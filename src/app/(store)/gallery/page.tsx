import { getCollections } from "@/lib/config";
import { getImageUrl } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export default async function GalleryPage() {
  const collections = await getCollections();

  return (
    <div className="container mx-auto px-6 py-12">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
            Gallery
          </span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Explore our visual archive and latest drops.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection, index) => (
          <Link
            href={`/shop/${collection.slug}`}
            key={collection.id}
            className={`relative group overflow-hidden block aspect-video ${index === 0 ? "md:col-span-2 aspect-[21/9]" : ""}`}
          >
            <div className="absolute inset-0 bg-neutral-900">
              <Image
                src={getImageUrl(collection.image)}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
    </div>
  );
}
