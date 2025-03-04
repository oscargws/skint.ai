import { Skeleton } from "@/components/ui/skeleton";
import PageTemplate from "@/components/page-template";

export default function SettingsPage() {
  return (
    <PageTemplate
      title="Settings"
      description="Tweak how everything works under the hood"
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
