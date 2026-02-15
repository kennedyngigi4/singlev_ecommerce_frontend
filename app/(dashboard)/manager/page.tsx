import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { auth } from '@/auth';
import { ApiRequests } from '@/lib/requests/api_requests';
import { DataTable } from './orders/_components/data-table';
import { columns } from './orders/_components/columns';


const SalesHomePage = async() => {
  const session = await auth();

  if (!session?.sessionToken) return;

  const stats = await ApiRequests.get("manager/stats/", session?.sessionToken);
  console.log(stats)

  return (
    <div className="flex flex-col space-y-5">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <Card>
            <CardContent>
              <CardTitle className="font-semibold text-xl pb-2">{stats?.total_products}</CardTitle>
              <CardDescription>Products</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent>
              <CardTitle className="font-semibold text-xl pb-2">{stats?.out_of_stock_products}</CardTitle>
              <CardDescription>Out-of-stock Products</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent>
              <CardTitle className="font-semibold text-xl pb-2">{stats.pending_orders_count}</CardTitle>
              <CardDescription>Pending Orders</CardDescription>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card>
            <CardContent>
              <CardTitle className="font-semibold text-xl pb-2">{stats.in_transit_orders}</CardTitle>
              <CardDescription>Orders In-transit</CardDescription>
            </CardContent>
          </Card>
        </div>

      </div>

      <div className="flex flex-col space-y-3 bg-white p-5">
        <h1 className="font-semibold">Latest orders</h1>

        <div>
          <DataTable columns={columns} data={stats.latest_orders} />
        </div>
      </div>

    </div>
  )
}

export default SalesHomePage