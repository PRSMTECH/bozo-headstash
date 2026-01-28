import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";

export default function RefundPage() {
  return (
    <PolicyLayout title="Refund" subtitle="Policy">
      <div className="space-y-6 whitespace-pre-wrap">
        {businessData.refund.content}
      </div>
    </PolicyLayout>
  );
}
