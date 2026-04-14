import React from 'react'
import SidebarMenuClient from './sidebar-menu-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const SidebarMenu = async () => {
    
    const res = await fetch("https://api.quza.co.ke/v1/products/categories/", {
        cache: "no-store",
    });

    if (!res.ok) {
        console.error("Failed to fetch categories:", res.status);
        return <SidebarMenuClient categories={[]} />;
    }

    const catData = await res.json();

    if (!Array.isArray(catData)) {
        console.error("Invalid categories format:", catData);
        return <SidebarMenuClient categories={[]} />;
    }

    return <SidebarMenuClient categories={catData} />;
}

export default SidebarMenu