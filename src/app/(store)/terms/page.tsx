import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of" subtitle="Service">
      <div className="space-y-6 whitespace-pre-wrap">
        {businessData.terms.content}
      </div>
    </PolicyLayout>
  );
}
