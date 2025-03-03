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
  Home,
  LayoutDashboard,
  Map,
  PieChart,
  Plug,
  Settings2,
  SquareTerminal,
  Wallet,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";

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

  const navData = {
    navMain: [
      {
        title: "Portfolio",
        url: "/",
        icon: Wallet,
        isActive: true,
        items: [
          { title: "Transactions", url: "#" },
          { title: "Accounts", url: "#" },
        ],
      },
      {
        title: "Reports",
        url: "/reports",
        icon: ChartSpline,
        items: [
          { title: "Income & Expenses", url: "" },
          { title: "Cashflow", url: "#" },
          { title: "Trends", url: "#" },
          { title: "Timeline", url: "#" },
        ],
      },
      {
        title: "Feeds",
        url: "/feeds",
        icon: Plug,
        items: [
          { title: "Manage", url: "#" },
          { title: "Add More", url: "#" },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          { title: "General", url: "#" },
          { title: "Notifications", url: "#" },
          { title: "Billing", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Design Engineering", url: "#", icon: Frame },
      { name: "Sales & Marketing", url: "#", icon: PieChart },
      { name: "Travel", url: "#", icon: Map },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={navData.navMain} />
        <NavProjects projects={navData.projects} />
      </SidebarContent>
      <SidebarFooter>
        {loading ? (
          <Skeleton className="h-10 w-32" />
        ) : (
          <NavUser
            user={{
              name: user?.user?.email || "Unknown User",
              email: user?.user?.email || "No email",
              avatar: "/avatars/default.jpg",
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
