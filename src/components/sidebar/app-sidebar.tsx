"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartSpline,
  Command,
  Frame,
  GalleryVerticalEnd,
  Hammer,
  Home,
  Landmark,
  LayoutDashboard,
  LayoutDashboardIcon,
  LifeBuoy,
  Map,
  PieChart,
  Plug,
  Send,
  Settings2,
  Sparkles,
  SquareTerminal,
  Wallet,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";
import { NavSecondary } from "./nav-secondary";
import Image from "next/image";
import Link from "next/link";
import { CommandTrigger } from "./command-trigger";
import { CommandMenu } from "./command-menu";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const supabase = createClient();
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchUser() {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) console.error("Error fetching user:", error);
      setUser(user);
      setLoading(false);
    }

    fetchUser();
  }, []);

  const navMain = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: Wallet,
    },
    {
      title: "Accounts",
      url: "/accounts",
      icon: Landmark,
      badge: "10",
    },
    {
      title: "Ask AI",
      url: "/assistant",
      icon: Sparkles,
    },
  ];

  const reports = [
    { title: "Income & Expenses", url: "/reports/income-expenses" },
    { title: "Trends", url: "/reports/trends" },
    { title: "Cashflow", url: "/reports/cashflow" },
  ];

  const secondary = [
    {
      title: "Support",
      url: "mailto:oscar@skint.ai",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "https://skint.featurebase.app/",
      icon: Send,
    },
    {
      title: "Roadmap",
      url: "https://skint.featurebase.app/roadmap",
      icon: Hammer,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex w-full align-center items-center max-w-sm flex-col rounded-lg">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Image src="/logo.png" alt="skint.ai logo" height={32} width={32} />
            <span>skint.ai</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarHeader>
        <CommandTrigger />
        <CommandMenu />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} reports={reports} />
        <NavSecondary items={secondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {loading ? (
          <div className="flex items-center space-x-2 p-2">
            <Skeleton className="h-8 w-8 rounded-lg bg-neutral-200" />
            <div className="space-y-2">
              <Skeleton className="h-2 w-[90px] bg-neutral-200" />
              <Skeleton className="h-2 w-[120px] bg-neutral-200" />
            </div>
          </div>
        ) : (
          <NavUser
            user={{
              name: user?.user?.name || "Oscar Watson-Smith",
              email: user?.user?.email || "No email",
              avatar: "/avatar.png",
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
