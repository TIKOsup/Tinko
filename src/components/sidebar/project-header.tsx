import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "../ui/sidebar";

export function ProjectHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip="Home"
          asChild
          size="lg"
        >
          <a href="/">
            <div className="bg-sidebar-primary flex aspect-square size-8 items-center justify-center rounded-lg">
              <img src="/logo.png" alt="Project Logo" />
            </div>
            <div className="text-left text-sm">
              <span className="truncate font-medium">Tinko Project</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}