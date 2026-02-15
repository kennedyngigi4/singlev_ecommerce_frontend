import React from 'react'
import { ApiRequests } from '@/lib/requests/api_requests'
import { auth } from '@/auth';
import PageClient from './pageClient';

type OrderDetailsProps = {
    params: {
        orderID: string;
    }
}


const OrderDetails = async ({ params }: OrderDetailsProps) => {
    const session = await auth();

    if(!session?.sessionToken) return;

    const order = await ApiRequests.get(`manager/order-details/${params.orderID}/`, session?.sessionToken);
    
    
    
    return (
       <PageClient order={order} />
    )
}

export default OrderDetails