import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";
import { Send } from "lucide-react";

export default function ContactPage() {
  return (
    <PolicyLayout title="Contact" subtitle="Us">
      <div className="grid md:grid-cols-2 gap-12 items-start text-neutral-300">
        <div className="space-y-8">
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
              Customer Support
            </h3>
            <p className="text-2xl font-black text-red-600 mb-2">
              {businessData.contact.email}
            </p>
            <p className="text-neutral-500">
              For order inquiries, returns, and general questions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
              Business Inquiries
            </h3>
            <p className="text-lg font-bold text-white mb-2">
              {businessData.contact.supportEmail}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
              Social Media
            </h3>
            <div className="flex gap-4">
              <a
                href={businessData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                IG
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                FB
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                YT
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-black/50 border border-white/10 p-3 rounded-lg focus:border-red-600 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/50 border border-white/10 p-3 rounded-lg focus:border-red-600 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-black/50 border border-white/10 p-3 rounded-lg focus:border-red-600 outline-none transition-colors"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-extrabold uppercase py-5 rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 shadow-[0_20px_50px_-15px_rgba(220,38,38,0.5)] tracking-widest group"
              style={{ color: "white" }}
            >
              <Send
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                style={{ color: "white" }}
              />
              <span style={{ color: "white" }}>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </PolicyLayout>
  );
}
