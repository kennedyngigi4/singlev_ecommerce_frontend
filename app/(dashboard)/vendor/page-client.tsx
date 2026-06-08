"use client"

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import React from 'react';

interface VendorClientPageProps {
    data?: any;
}

const VendorClientPage = ({ data }: VendorClientPageProps) => {
  return (
      <div className="flex flex-col space-y-5">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div>
                  <Card>
                      <CardContent>
                          <CardTitle className="font-semibold text-xl pb-2">{data?.total_products}</CardTitle>
                          <CardDescription>Products</CardDescription>
                      </CardContent>
                  </Card>
              </div>

              <div>
                  <Card>
                      <CardContent>
                          <CardTitle className="font-semibold text-xl pb-2">{data?.out_of_stock_products}</CardTitle>
                          <CardDescription>Out of Stock Products</CardDescription>
                      </CardContent>
                  </Card>
              </div>

              <div>
                  <Card>
                      <CardContent>
                          <CardTitle className="font-semibold text-xl pb-2">{data?.pending_orders}</CardTitle>
                          <CardDescription>Pending Orders</CardDescription>
                      </CardContent>
                  </Card>
              </div>


              <div>
                  <Card>
                      <CardContent>
                          <CardTitle className="font-semibold text-xl pb-2">{data?.orders_intransit}</CardTitle>
                          <CardDescription>Orders In-Transit</CardDescription>
                      </CardContent>
                  </Card>
              </div>

          </div>

          <div className="flex flex-col space-y-3 bg-white shadow rounded-xl p-5">
              <h1 className="font-semibold">Latest orders</h1>

              <div>

              </div>
          </div>

      </div>
  )
}

export default VendorClientPage