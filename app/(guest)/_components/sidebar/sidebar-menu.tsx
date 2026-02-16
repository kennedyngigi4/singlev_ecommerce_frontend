import React from 'react'
import SidebarMenuClient from './sidebar-menu-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const SidebarMenu = async() => {

    const categories = await ApiRequests.serverGet("products/categories");

   

    return (
        <SidebarMenuClient categories={categories} />
    );
}

export default SidebarMenu