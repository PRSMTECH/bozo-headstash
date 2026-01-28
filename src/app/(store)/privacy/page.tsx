import { PolicyLayout } from "@/components/layout/PolicyLayout";
import { businessData } from "@/constants/businessData";

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy" subtitle="Policy">
      <div className="space-y-6 whitespace-pre-wrap">
        {businessData.privacy.content}
      </div>
    </PolicyLayout>
  );
}
