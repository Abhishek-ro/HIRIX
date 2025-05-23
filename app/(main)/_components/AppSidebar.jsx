"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SideBarOptions } from "@/services/Constants.jsx";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center ">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={200}
          height={200}
          className="w-[150px] h-[auto]"
        />
        <Button className="w-full mt-4">
          <Plus /> Create new Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuItem key={index} className="p-1">
                  <SidebarMenuButton
                    asChild
                    className={`p-5 hover:bg-black/20  ${path === option.path && "bg-black/20" }`}
                  >
                    <Link href={option.path}>
                      <option.icon
                        className={`${path === option.path && "text-primary"}`}
                      />
                      <span
                        className={`text-[16px] font-medium ${
                          path === option.path && "text-primary"
                        }`}
                      >
                        {option.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
