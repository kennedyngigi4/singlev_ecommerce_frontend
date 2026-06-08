import React from 'react'
import VendorsClientPage from './page-client'
import { ApiRequests } from '@/lib/requests/api_requests';
import { auth } from '@/auth';

const page = async() => {
    const session = await auth();
    const vendors = await ApiRequests.serverGet("manager/vendors/", session?.accessToken);


    return (
        <div>
            <VendorsClientPage vendors={vendors.vendors} />
        </div>
    );
}

export default page