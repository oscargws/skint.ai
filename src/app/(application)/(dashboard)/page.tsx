import { Skeleton } from "@/components/ui/skeleton";
import PageTemplate from "@/components/page-template";
import { AssetsChart } from "./assets-chart";
import { NetworthChart } from "./networth-chart";

export default function DashboardPage() {
  return (
    <PageTemplate
      title="Dashboard"
      description="A birds eye view of your finances"
      buttonLabel="Add Account"
    >
      <div className="grid grid-cols-3 gap-4">
        <NetworthChart />
        <AssetsChart />
      </div>
    </PageTemplate>
  );
}
