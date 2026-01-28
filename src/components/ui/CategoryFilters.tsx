"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
}

interface CategoryFiltersProps {
  categories: Category[];
  activeCategory: string;
}

export default function CategoryFilters({
  categories,
  activeCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-20 relative">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <Link
            key={cat.slug}
            href={cat.slug ? `/shop?category=${cat.slug}` : "/shop"}
            scroll={false}
            className={`
              relative px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500
              ${isActive ? "text-black" : "text-neutral-500 hover:text-white bg-white/5 hover:bg-white/10"}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
              />
            )}
            <motion.span
              className="relative z-10"
              whileHover={!isActive ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.span>
          </Link>
        );
      })}
    </div>
  );
}
