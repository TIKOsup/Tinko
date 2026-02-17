"use client"

import * as React from "react"
import { Calculator, Settings2 } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { ProjectHeader } from "./project-header";
import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects";

const data = {
  navMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Appearance",
          url: "#",
        }
      ]
    }
  ],
  projects: [
    {
      name: "Calculator",
      url: "/calculator",
      icon: Calculator,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ProjectHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}