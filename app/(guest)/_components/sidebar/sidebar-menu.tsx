import React from 'react'
import SidebarMenuClient from './sidebar-menu-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const SidebarMenu = async() => {

    const categories = await fetch(
        `${process.env.APIURL}/products/categories/`,
        { cache: "no-store" }
    ).then(res => res.json());

   

    return (
        <SidebarMenuClient categories={categories} />
    );
}

export default SidebarMenu