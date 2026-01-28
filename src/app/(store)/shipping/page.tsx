import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";

export default function ShippingPage() {
  return (
    <PolicyLayout title="Shipping" subtitle="Policy">
      <div className="space-y-6 whitespace-pre-wrap">
        {businessData.shipping.content}
      </div>

      <div className="mt-12 overflow-hidden rounded-xl border border-white/5 bg-white/5">
        <table className="w-full text-left">
          <thead className="bg-white/10 uppercase text-xs font-bold tracking-widest text-white">
            <tr>
              <th className="px-6 py-4">Destination</th>
              <th className="px-6 py-4">Delivery Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-neutral-400">
            <tr>
              <td className="px-6 py-4 text-white font-medium">Domestic</td>
              <td className="px-6 py-4">
                {businessData.shipping.domesticTime}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-white font-medium">
                International
              </td>
              <td className="px-6 py-4">
                {businessData.shipping.internationalTime}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PolicyLayout>
  );
}
