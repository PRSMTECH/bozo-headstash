"use client";

import Link from "next/link";
import { ShoppingBag, User, Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to close menus on navigation
  const closeMenus = () => {
    setIsOpen(false);
    setIsSearchOpen(false);
  };

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery" },
    { name: "Movies", href: "/movies" },
    { name: "About", href: "/about" },
    { name: "Order Tracking", href: "/order-tracking" },
  ];

  const isHome = pathname === "/";

  return (
    <>
      {/* Mobile Menu Overlay - rendered BEFORE nav so nav is on top */}
      <div
        className={`fixed inset-0 bg-neutral-950 z-30 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center pt-32 gap-6 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={closeMenus}
            className="text-3xl font-black uppercase text-white hover:text-red-600 transition-colors tracking-widest"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex flex-col items-center gap-4 mt-6 pt-6 border-t border-neutral-800">
          <Link
            href="/profile"
            onClick={closeMenus}
            className="text-xl uppercase text-neutral-400 hover:text-white transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/cart"
            onClick={closeMenus}
            className="text-xl uppercase text-neutral-400 hover:text-white transition-colors"
          >
            Cart
          </Link>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          isOpen ? "bg-neutral-950 border-white/5 py-4"
          : scrolled || !isHome ?
            "bg-neutral-950/80 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-red-500 transition-colors relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ?
              <X size={24} />
            : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link
            href="/shop"
            className="text-2xl font-bold tracking-tighter uppercase text-white z-50 relative group"
          >
            Bozo{" "}
            <span className="text-red-600 group-hover:text-red-500 transition-colors">
              Headstash
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-red-500 ${
                  pathname === link.href ? "text-red-500" : "text-neutral-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div
            className={`items-center gap-6 ${isOpen ? "hidden md:flex" : "flex"}`}
          >
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <Search size={20} />
            </button>
            <Link
              href="/profile"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <User size={20} />
            </Link>
            <Link
              href="/cart"
              className="text-neutral-300 hover:text-white transition-colors relative group"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-neutral-950/95 z-60 flex items-center justify-center animate-in fade-in duration-200">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 md:top-12 md:right-12 text-neutral-400 hover:text-red-500 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-4xl px-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSearchOpen(false); /* Add search logic here later */
              }}
            >
              <input
                type="text"
                placeholder="SEARCH ARCHIVE..."
                className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-red-600 text-3xl md:text-6xl font-black uppercase text-white placeholder-neutral-800 outline-none pb-4 transition-colors tracking-tighter"
                autoFocus
              />
            </form>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="text-neutral-500 text-sm uppercase tracking-widest">
                Popular:
              </span>
              {["New Arrivals", "Hoodies", "Accessories", "Limited"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="text-neutral-300 hover:text-red-500 text-sm uppercase tracking-wide transition-colors"
                  >
                    {tag}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
