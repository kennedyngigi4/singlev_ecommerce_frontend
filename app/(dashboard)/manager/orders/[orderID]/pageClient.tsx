"use client";

import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface PageClientProps{
    order: any;
}

const PageClient = ({ order }: PageClientProps) => {
    const {data:session} = useSession();
    const router = useRouter()

    const orderDispatch = async () => {
        
        if(!session?.accessToken) return;
        
        const payload = {
            "id": order.id,
            "status": "in_transit"
        }
        const resp = await ApiRequests.patch("manager/dispatch-order/", session?.accessToken, payload);
        
        if (resp.success) {
            toast.success(resp.message);
            router.replace("/manager/orders");
        } else {
            toast.error(resp.message);
        }
    }

  return (
      <div className="flex flex-col space-y-5">
          <Link href="/manager/orders/" className="flex text-sm items-center"><ArrowLeft size={15} /> Orders</Link>
          <div className="flex md:flex-row flex-col justify-between bg-white p-3">
              <div className="flex flex-col space-y-2">
                  <h1><span className="font-semibold">ORDER ID:</span> {order?.order_id}</h1>

                  <div className="flex flex-col space-y-0.5">
                      <p className="text-slate-500 text-sm"><span className="font-semibold">Items:</span> {order?.quantity}</p>
                      <p className="text-slate-500 text-sm"><span className="font-semibold">Total amount:</span> {parseFloat(order?.total_amount).toLocaleString()}</p>

                      <p className={cn("text-green-600 text-sm capitalize", order?.status === "pending" && "text-red-600")}><span className="font-semibold text-slate-500">Status:</span> {order?.status}</p>
                      <p className="text-slate-500 text-sm">
                          <span className="font-semibold">DoO:</span>
                          {new Date(order?.date_created).toLocaleDateString("en-us", { year: "2-digit", month: "short", day: "2-digit" })}
                      </p>
                  </div>
              </div>

              <div>
                  {order.payment_status === "paid"
                      ? (<>
                          {
                              order.status === "pending"
                                  ? (<>
                                      <Button variant="default" size="sm" className="cursor-pointer" onClick={orderDispatch}>Dispatch</Button>
                                  </>
                                  )
                                  : (
                                      <>
                                          <Button variant="destructive" size="sm" className="cursor-pointer capitalize" disabled>{order.status}</Button>
                                      </>
                                  )
                          }
                      </>)
                      : (
                          <>
                              <Button variant="destructive" size="sm" className="cursor-pointer capitalize" disabled>{order.status}</Button>
                          </>
                      )
                  }
              </div>
          </div>

          <div className="flex flex-col space-y-4 bg-white p-3">
              <h1 className="font-semibold">Items</h1>

              {order?.order_items.map((item: any) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-5 pb-2 border-b-1  border-slate-200 border-dotted">
                      <div className="md:col-span-3">
                          <Image src={item?.product_thumbnail} alt={`${item.product}`} width={50} height={50} />
                      </div>
                      <div className="md:col-span-2">
                          <p className='text-sm'>{item?.product}</p>
                      </div>
                      <div className="md:col-span-2">
                          <p className="text-slate-500 text-xs">Total Items</p>
                          <p className='text-sm'>{parseInt(item?.quantity).toLocaleString()}</p>
                      </div>
                      <div className="md:col-span-3">
                          <p className="text-slate-500 text-sm">Price (KSh)</p>
                          <p className='text-sm'>{parseFloat(item?.price).toLocaleString()}</p>
                      </div>
                      <div className="md:col-span-2">
                          <p className="text-slate-500 text-xs">Status</p>
                          <p className={cn("capitalize text-green-600 text-sm", item.status === "pending" && "text-red-600")}>{item?.status}</p>
                      </div>

                  </div>
              ))}
          </div>

          <div className="bg-white p-3">
              <h1 className="font-semibold pb-2">Payments</h1>
              {order.payments.map((item: any) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-5 pb-2 border-b-1  border-slate-200 border-dotted">
                      <div className="md:col-span-3">
                          <p className="text-slate-500 text-xs">Transaction Date</p>
                          <p className='text-sm'>{new Date(item?.created_at).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "2-digit" })}</p>
                      </div>
                      <div className="md:col-span-2">
                          <p className="text-slate-500 text-xs">Transaction Code</p>
                          <p className='text-sm'>{item?.transaction_code ? item?.transaction_code : "None"}</p>
                      </div>
                      <div className="md:col-span-2">
                          <p className="text-slate-500 text-xs">Amount Paid (KSh)</p>
                          <p className='text-sm'>{parseFloat(item?.amount).toLocaleString()}</p>
                      </div>
                      <div className="md:col-span-2">
                          <p className="text-slate-500 text-xs">Status</p>
                          <p className={cn("capitalize text-red-600 text-sm", item.status === "paid" && "text-green-600")}>{item?.status}</p>
                      </div>
                      <div className="md:col-span-3">
                          <p className="text-slate-500 text-sm">Phone Number</p>
                          <p className='text-sm'>{item?.phone_number}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default PageClient