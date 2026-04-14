import React from 'react'
import SidebarMenuClient from './sidebar-menu-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const SidebarMenu = async() => {

    const categories = await ApiRequests.serverGet('products/categories/');

    if (!categories || !Array.isArray(categories)) {
        console.error("Failed to load categories:", categories);
        return <SidebarMenuClient categories={[]} />;
    }


    return (
        <SidebarMenuClient categories={categories} />
    );
}

export default SidebarMenu