import { auth } from '@/auth';
import { ApiRequests } from '@/lib/requests/api_requests';
import React from 'react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const OrdersPage = async () => {
  
  const session = await auth();

  const orders = await ApiRequests.get("superadmin/orders/all-orders/", session?.accessToken);


  return (
    <div>
      <DataTable columns={columns} data={orders} />
    </div>
  )
}

export default OrdersPage