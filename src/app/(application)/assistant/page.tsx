import { Skeleton } from "@/components/ui/skeleton";
import PageTemplate from "@/components/page-template";

export default function AssistantPage() {
  return (
    <PageTemplate
      title="AI Assistant"
      description="Leverage AI to gain insights into your personal finances"
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
