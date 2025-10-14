"use client";

import * as React from "react";
import { BookOpen, LayoutDashboard, PieChart, Plug } from "lucide-react";

import { NavMain } from "@/components/admin/sidebar/NavMain";
import { NavUser } from "@/components/admin/sidebar/NavUser";
import { TeamSwitcher } from "@/components/admin/sidebar/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// System logo component to be used wherever an icon ElementType is expected
const SystemLogo = ({ className }: { className?: string }) => (
  <img src="/images/logo-nav.webp" alt="SabIA" className={className} />
);

const data = {
  user: {
    name: "João Pedro",
    email: "joao@sabia.api.br",
    avatar: "/images/logo-nav.webp",
  },
  teams: [
    {
      name: "SabIA Team",
      logo: SystemLogo,
      plan: "Pró",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Integrações",
      url: "/admin/integrations",
      icon: Plug,
    },
    {
      title: "Documentação",
      url: "/admin/documentation",
      icon: BookOpen,
    },
    {
      title: "Consumo do Plano",
      url: "/admin/usage",
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
