import { Skeleton } from "@/components/ui/skeleton";
import PageTemplate from "@/components/page-template";

export default function AccountsPage() {
  return (
    <PageTemplate
      title="Accounts"
      description="Manage your accounts and view account details"
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
