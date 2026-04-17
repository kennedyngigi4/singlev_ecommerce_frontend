import { auth } from '@/auth'
import { ApiRequests } from '@/lib/requests/api_requests'
import React from 'react'
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const OrdersPage = async () => {
  const session = await auth();
  const orders = await ApiRequests.serverGet("manager/all-orders/", session?.sessionToken);


  return (
    <div className="flex flex-col space-y-4 bg-white p-5">
      <h1 className="font-semibold text-lg">All Orders</h1>
      <div>
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  )
}

export default OrdersPage