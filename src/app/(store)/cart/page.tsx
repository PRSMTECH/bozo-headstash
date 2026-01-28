"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  // Mock Cart State - In real app, use Context or Zustand
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bozo Logo Tee",
      price: 45.0,
      quantity: 1,
      size: "L",
      image: "/product-placeholder.jpg", // Placeholder
      color: "Black",
    },
    {
      id: 2,
      name: "Stash Cap 2026",
      price: 35.0,
      quantity: 2,
      size: "One Size",
      image: "/product-placeholder.jpg",
      color: "Red",
    },
  ]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 15.0; // Flat rate for now
  const total = subtotal + shipping;

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }),
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black uppercase text-white mb-6">
          Your Cart is Empty
        </h1>
        <p className="text-neutral-400 mb-8 max-w-md">
          Looks like you haven&apos;t added any heat to your stash yet.
        </p>
        <Link
          href="/shop"
          className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-widest rounded-none transition-all hover:scale-105"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
          Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-900">
            Cart
          </span>
        </h1>
      </header>

      <div className="grid lg:grid-cols-3 gap-12 text-white">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="group flex gap-6 p-6 bg-neutral-900/30 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-24 h-32 bg-neutral-800 rounded-lg shrink-0 overflow-hidden">
                {/* Expecting real image later */}
                <div className="w-full h-full bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-xs text-neutral-600 font-mono">
                  IMG
                </div>
              </div>

              <div className="grow flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">
                      {item.color} / {item.size}
                    </p>
                  </div>
                  <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-3 bg-neutral-950 rounded-lg p-1 border border-white/5">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-neutral-800 rounded transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-mono text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-neutral-800 rounded transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-neutral-500 hover:text-red-500 transition-colors p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl sticky top-32">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">
              Summary
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-white text-black hover:bg-neutral-200 font-black uppercase tracking-widest text-lg rounded-none transition-colors flex items-center justify-center gap-2 group">
              Checkout
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <p className="mt-4 text-xs text-neutral-500 text-center">
              Secure Checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
