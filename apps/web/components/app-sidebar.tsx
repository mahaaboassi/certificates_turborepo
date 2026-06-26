import Link from "next/link";
import { Routes } from "@/constants/routes";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { RouteProps, RoutesProps } from "@/constants/types";
import { LogOut } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarHeader>
        Certificate System
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {Routes.map((route: RoutesProps) => {
              const Icon = route.icon;

              return (
                <SidebarMenuItem key={route.key}>
                  <SidebarMenuButton asChild>
                    <Link href={route.link}>
                      {Icon && <Icon  />}
                      <span>{route.name}</span>
                    </Link>
                  </SidebarMenuButton>

                        {route.children?.length ? (
                            <SidebarMenu className="ml-6 mt-1">
                            {route.children.map((child: RouteProps) => {
                                const ChildIcon = child.icon;

                                return (
                                <SidebarMenuItem key={child.key}>
                                    <SidebarMenuButton asChild size="sm">
                                    <Link href={child.link}>
                                        {ChildIcon && <ChildIcon className="size-5" />}
                                        <span>{child.name}</span>
                                    </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                );
                            })}
                            </SidebarMenu>
                        ) : null}
                        </SidebarMenuItem>
                    );
                    })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex gap-2 border-t-2 pt-4 border-[rgb(var(--light_grey-rgb)/0.2)]  ">
            <LogOut /> Logout
        </div>
        
      </SidebarFooter>
    </Sidebar>
  );
}