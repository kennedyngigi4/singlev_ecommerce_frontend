"use client";

import React, { useEffect, useMemo, useState } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { adminItems, clientItems, managerItems, vendorItems } from '@/lib/menus/menu-items';
import Link from 'next/link';
import { LogOutIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';



export interface AppSidebarProps {
  role: any;
}

const AppSidebar = ({ role }: AppSidebarProps) => {

  const {data:session} = useSession();
  // const [menuItems, setMenuItems] = useState<any[]>([]);
  const router = useRouter();
  const { open } = useSidebar();

  const menuItems = useMemo(() => {
    switch (role) {
      case "admin":
        return adminItems;
      case "client":
        return clientItems;
      case "manager":
        return managerItems;
      case "vendor":
        return vendorItems;
      default:
        return [];
    }
  }, [role]);


  const onSignOut = async () => {
    await signOut();
    router.push("/login");
  }


  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="font-bold text-qprimary uppercase">
        {open 
          ? (<>
            <Link href="/">
              <Image src="/quza_logo.png" alt="QUZA KENYA | Kenya's leading online shopping" width={80} height={80} />
            </Link>
          </>) 
          : (<>
            <Link href="/">
              <Image src="/icon.png" alt="QUZA KENYA | Kenya's leading online shopping" width={30} height={30} />
            </Link>
          </>)
        }
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item: any) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onSignOut} className="font-semibold text-red-700 cursor-pointer">
              <LogOutIcon /> Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar