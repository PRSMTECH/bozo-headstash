import Link from "next/link";
import { Instagram } from "lucide-react";
import { businessData } from "@/constants/businessData";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            href="/shop"
            className="text-white text-xl font-bold uppercase tracking-tighter hover:text-red-500 transition-colors"
          >
            Bozo Headstash
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium streetwear for the bold. Designed for those who stand out.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href={businessData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white hover:text-red-500 transition-all bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-red-500/50 flex items-center gap-2"
              aria-label="Instagram"
            >
              <Instagram size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Follow{" "}
                <span className="group-hover:scale-125 transition-transform inline-block">
                  🤡
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide text-sm">
            Shop
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/shop"
                className="hover:text-red-500 transition-colors"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/shop/tees"
                className="hover:text-red-500 transition-colors"
              >
                Tees
              </Link>
            </li>
            <li>
              <Link
                href="/shop/ski-suits"
                className="hover:text-red-500 transition-colors"
              >
                Ski Suits
              </Link>
            </li>
            <li>
              <Link
                href="/shop/accessories"
                className="hover:text-red-500 transition-colors"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide text-sm">
            Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/order-tracking"
                className="hover:text-red-500 transition-colors"
              >
                Order Tracking
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-red-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="hover:text-red-500 transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="hover:text-red-500 transition-colors"
              >
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund"
                className="hover:text-red-500 transition-colors"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide text-sm">
            Stay Updated
          </h4>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors text-sm"
            />
            <button className="group bg-white text-black font-bold uppercase py-3 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              Subscribe{" "}
              <span className="text-lg group-hover:scale-125 transition-transform">
                🤡
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>
          &copy; {new Date().getFullYear()} Bozo Headstash Clothing. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
