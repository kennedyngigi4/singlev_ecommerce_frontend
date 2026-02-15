"use client";

import React from 'react';
import { Order } from '@/lib/models/orders';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import MpesaPaymentModal from './_components/mpesa-payment-modal';


interface OrdersClientProps {
    orders: Order[];
}

const OrdersClient = ({ orders }: OrdersClientProps) => {
  return (
    <div className="flex flex-col space-x-6 bg-white p-5">
      <h1 className="pb-4 font-semibold text-xl">Orders</h1>
      <div>
        {orders.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-5 border border-2 border-slate-100 mb-2 p-4">
            <div className="md:col-span-2">
              <Image src={item?.product_thumbnail} alt={`${item?.product}`} width={100} height={100} />
            </div>
            <div className="md:col-span-8">
              <h1>{item?.product}</h1>
              <p className="text-xs text-slate-400">Order {item?.order.order_id}</p>

              <div>

              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-row md:flex-col space-y-8 justify-between md:justify-center md:items-center">
                {item?.order.payment_status !== "paid" ? (
                  <>
                    <MpesaPaymentModal amount={item?.order?.total_amount} orderid={item?.order?.order_id} />
                  </>
                ) : (
                  <p className="text-xs capitalize text-green-600">
                    {item?.order.status}
                  </p>
                )}

                <Link href={`/user/orders/${item?.order?.id}`} className="text-xs ">See details</Link>
              </div>
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}

export default OrdersClient