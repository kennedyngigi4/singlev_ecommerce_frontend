"use client";

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React, { useEffect, useState } from 'react'
import AppSidebar from './_components/sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({ children } : { children: React.ReactNode}) => {

  const { data:session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if(status === "unauthenticated") {
      router.push("/login");
    }
    

  }, [status, router]);

  if(status === "loading") return null;

  return (
    <SidebarProvider>
        <AppSidebar role={session?.user?.role} />
        <main className='container-fluid'>
            <SidebarTrigger />
            <div className="py-5 w-full min-h-screen">{children}</div>
            
            <div className="flex bg-white py-3 justify-center items-center">
              <p className="text-xs flex items-center">&copy; <span className="font-bold pe-1.5">2026 QUZA MAISHA LTD </span> | All Rights Reserved</p>
            </div>
        </main>
    </SidebarProvider>
  )
}

export default DashboardLayout