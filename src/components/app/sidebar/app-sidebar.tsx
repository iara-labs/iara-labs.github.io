"use client";

import * as React from "react";
import { BookOpen, LayoutDashboard, PieChart, Plug } from "lucide-react";

import { NavMain } from "@/components/app/sidebar/nav-main";
import { NavUser } from "@/components/app/sidebar/nav-user";
import { TeamSwitcher } from "@/components/app/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// System logo component to be used wherever an icon ElementType is expected
const SystemLogo = ({ className }: { className?: string }) => (
  <img src="/images/logo-nav.webp" alt="Iara" className={className} />
);

const data = {
  user: {
    name: "João Pedro",
    email: "joao@iara.api.br",
    avatar: "/images/logo-nav.webp",
  },
  teams: [
    {
      name: "Iara Team",
      logo: SystemLogo,
      plan: "Pró",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/app/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Integrações",
      url: "/app/integrations",
      icon: Plug,
    },
    {
      title: "Documentação",
      url: "/app/documentation",
      icon: BookOpen,
    },
    {
      title: "Consumo do Plano",
      url: "/app/usage",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
