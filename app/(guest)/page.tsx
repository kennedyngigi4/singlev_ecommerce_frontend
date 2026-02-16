import React from 'react'
import HomepageClient from './page-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const page = async() => {
    
    const featuredProducts = await ApiRequests.serverGet("products/home/");
    const categories = await ApiRequests.serverGet("products/categories");

    return (
        <HomepageClient featured={featuredProducts} categories={categories} />
    )
}

export default page