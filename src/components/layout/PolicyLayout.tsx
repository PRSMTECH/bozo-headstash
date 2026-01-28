import React from "react";
import { Mail } from "lucide-react";
import { businessData } from "@/constants/businessData";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
            {title}{" "}
            {subtitle && (
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-900">
                {subtitle}
              </span>
            )}
          </h1>
        </header>

        <div className="prose prose-invert prose-red max-w-none">
          <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl space-y-8 text-neutral-300 leading-relaxed text-lg">
            {children}
          </div>
        </div>

        <div className="text-center bg-neutral-900/50 p-12 border border-white/5 mx-auto max-w-2xl rounded-2xl">
          <h2 className="text-2xl font-bold text-white uppercase mb-4">
            Need Help?
          </h2>
          <p className="text-neutral-400 mb-8">
            Our support team is available 24/7 to assist you.
          </p>
          <a
            href={`mailto:${businessData.contact.supportEmail}`}
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white! font-extrabold uppercase px-12 py-5 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-[0_20px_50px_-15px_rgba(220,38,38,0.6)] tracking-widest group no-underline"
            style={{ color: "white" }}
          >
            <Mail
              className="w-5 h-5 group-hover:rotate-12 transition-transform"
              style={{ color: "white" }}
            />
            <span style={{ color: "white" }}>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
};
