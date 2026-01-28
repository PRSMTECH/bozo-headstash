"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "error">(
    "idle",
  );

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      // Mock logic
      if (orderId.length > 3) {
        setStatus("found");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Track Order
          </h1>
          <p className="text-neutral-400">
            Enter your order details below to see the current status.
          </p>
        </header>

        <form onSubmit={handleTrack} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Order ID
            </label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="#BZ-12345"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-white text-black font-black uppercase py-4 hover:bg-neutral-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" ?
              "Locating..."
            : <>
                <Search size={18} /> Track Order
              </>
            }
          </button>
        </form>

        {status === "found" && (
          <div className="bg-green-500/10 border border-green-500/20 p-6 text-center animate-in fade-in slide-in-from-bottom-4">
            <p className="text-green-500 font-bold uppercase mb-2">
              Order Found
            </p>
            <p className="text-neutral-300 text-sm">
              Your order <span className="text-white font-mono">{orderId}</span>{" "}
              is currently{" "}
              <span className="text-white font-bold">Processing</span>. Expected
              shipping in 2-3 business days.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-500/10 border border-red-500/20 p-6 text-center animate-in fade-in slide-in-from-bottom-4">
            <p className="text-red-500 font-bold uppercase mb-2">
              Order Not Found
            </p>
            <p className="text-neutral-300 text-sm">
              We couldn&apos;t locate an order with those details. Please double
              check and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
