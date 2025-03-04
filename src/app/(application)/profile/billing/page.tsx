import { Skeleton } from "@/components/ui/skeleton";
import PageTemplate from "@/components/page-template";

export default function BillingPage() {
  return (
    <PageTemplate
      title="Billing"
      description="Manage your invoices and product plan"
      buttonLabel="Add Account"
    >
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-full rounded-lg" />
        <Skeleton className="h-8 w-full rounded-lg" />
        <Skeleton className="h-8 w-full rounded-lg" />
      </div>
    </PageTemplate>
  );
}
