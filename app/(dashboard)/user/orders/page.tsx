import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { ApiRequests } from '@/lib/requests/api_requests';
import OrdersClient from './OrdersClient';

const Orders = async () => {

  const session = await auth();

  if(!session){
    redirect("/login")
  }

  const resp = await ApiRequests.serverGet("orders/my-orders/", session?.sessionToken);
  console.log(resp);

  return (
    <OrdersClient orders={resp} />
  )
}

export default Orders