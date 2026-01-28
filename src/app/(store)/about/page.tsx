import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";

export default function AboutPage() {
  return (
    <PolicyLayout title="About" subtitle="Us">
      <div className="space-y-6 whitespace-pre-wrap">
        {businessData.about.content}
      </div>

      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 border border-white/5 rounded-xl text-center">
          <div className="text-red-500 text-3xl mb-4">✦</div>
          <h3 className="text-white font-bold uppercase mb-2">Quality</h3>
          <p className="text-sm text-neutral-400">
            Finest materials crafted for comfort and style.
          </p>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-xl text-center">
          <div className="text-red-500 text-3xl mb-4">🌍</div>
          <h3 className="text-white font-bold uppercase mb-2">Worldwide</h3>
          <p className="text-sm text-neutral-400">
            Fast and reliable shipping across the globe.
          </p>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-xl text-center">
          <div className="text-red-500 text-3xl mb-4">⚡</div>
          <h3 className="text-white font-bold uppercase mb-2">Exclusive</h3>
          <p className="text-sm text-neutral-400">
            Unique designs that help you express yourself.
          </p>
        </div>
      </div>
    </PolicyLayout>
  );
}
