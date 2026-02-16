import React from 'react'
import MenuDrawerClient from './menu-drawer-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const MenuDrawer = async() => {

    const categories = await fetch(
        `${process.env.APIURL}/products/categories/`,
        { cache: "no-store" }
    ).then(res => res.json());

    return (
        <MenuDrawerClient categories={categories} />
    )
}

export default MenuDrawer