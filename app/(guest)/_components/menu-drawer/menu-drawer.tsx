import React from 'react'
import MenuDrawerClient from './menu-drawer-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const MenuDrawer = async() => {

    const categories = await ApiRequests.serverGet('products/categories/');

    if (!categories || categories.success === false) {
        return <MenuDrawerClient categories={[]} />; // fallback UI
    }

    return (
        <MenuDrawerClient categories={categories} />
    )
}

export default MenuDrawer