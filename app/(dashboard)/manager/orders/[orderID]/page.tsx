import React from 'react'
import { ApiRequests } from '@/lib/requests/api_requests'
import { auth } from '@/auth';
import PageClient from './pageClient';

type OrderDetailsProps = {
    params: Promise<{
        orderID: string;
    }>
}


const OrderDetails = async ({ params }: OrderDetailsProps) => {
    const { orderID } = await params;
    const session = await auth();

    if(!session?.sessionToken) return;

    const order = await ApiRequests.serverGet(`manager/order-details/${orderID}/`, session?.sessionToken);
    
    
    
    return (
       <PageClient order={order} />
    )
}

export default OrderDetails