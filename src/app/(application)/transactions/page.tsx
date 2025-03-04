import { Skeleton } from "@/components/ui/skeleton";
import PageTemplate from "@/components/page-template";

export default function TransactionsPage() {
  return (
    <PageTemplate
      title="Transactions"
      description="View and categorise your transactions"
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
