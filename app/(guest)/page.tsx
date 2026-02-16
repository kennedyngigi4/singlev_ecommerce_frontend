import React from 'react'
import HomepageClient from './page-client'
import { ApiRequests } from '@/lib/requests/api_requests';

const page = async() => {
    
    const featuredProducts = await ApiRequests.serverGet("products/home/");

    return (
        <HomepageClient featured={featuredProducts} />
    )
}

export default page