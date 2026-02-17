import React from 'react'
import SidebarMenuClient from './sidebar-menu-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const SidebarMenu = async() => {

    const categories = await ApiRequests.serverGet('products/categories/');

    if (!categories || categories.success === false) {
        console.error('Failed to load categories:', categories);
        return <SidebarMenuClient categories={[]} />; // fallback UI
    }

   

    return (
        <SidebarMenuClient categories={categories} />
    );
}

export default SidebarMenu