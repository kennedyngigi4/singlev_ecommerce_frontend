import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { ApiRequests } from '@/lib/requests/api_requests'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type OrderIDPageProps = {
    params: {
        orderID: string;
    }
}

const OrderIDPage = async ({ params }: OrderIDPageProps) => {
    const session = await auth();
    const { orderID } = params;
    
    const order = await ApiRequests.get(`orders/order/${orderID}/`, session?.sessionToken);
    
    return (
        <div className="flex flex-col space-y-5 bg-white p-5"> 
            <div>
                <Link href="/user/orders"><Button variant="ghost" className="cursor-pointer"><ArrowLeft /> Order Details</Button></Link>
            </div>

            <div className='flex flex-col'>
                <h1 className="font-bold">ORDER ID: {order.order_id}</h1>
                
                <div className="flex flex-col space-y-1 pt-4">
                    <p className='text-sm text-slate-500'>{order.quantity} item(s)</p>
                    <p className='text-sm text-slate-500'>Placed on: {new Date(order?.date_created).toLocaleDateString("en-us", { year: "numeric", month: "2-digit", day: "numeric"})}</p>
                    <p className='text-sm text-slate-500'>Total: KSh {parseFloat(order.total_amount).toLocaleString()}</p>
                </div>

            </div>

            
            <div>
                <h1 className="font-semibold text-lg pb-2">Items in your order</h1>

                <div>
                    {order.order_items.map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-1 border-slate-200 rounded p-4 mb-3">
                            <div className="md:col-span-2">
                                <Image src={item.product_thumbnail} alt={`${order.order_id}`} width={100} height={100} />
                            </div>
                            <div className="md:col-span-8">
                                <h1>{item?.product}</h1>
                                <p className='text-sm text-slate-500'>Quantity: {item.quantity}</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="capitalize">{item.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrderIDPage