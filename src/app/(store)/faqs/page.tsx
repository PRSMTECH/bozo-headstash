import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";

export default function FaqsPage() {
  return (
    <PolicyLayout title="General" subtitle="FAQs">
      <div className="space-y-8">
        {businessData.faqs.map((faq, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-all hover:border-red-600/30"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-start">
              <span className="text-red-600 mr-4 font-mono">Q.</span>
              {faq.q}
            </h3>
            <p className="text-neutral-400 pl-8 leading-relaxed">
              <span className="text-neutral-600 mr-4 font-mono">A.</span>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </PolicyLayout>
  );
}
