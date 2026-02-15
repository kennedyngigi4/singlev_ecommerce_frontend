"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { User } from '@/lib/models/user';
import { ApiRequests } from '@/lib/requests/api_requests';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { checkoutSchema } from '@/lib/validations/validations';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomFormField from '@/components/ui/custom-form-field';


interface CheckoutClientProps {
    user: User | null;
}

const CheckoutClient = ({ user }: CheckoutClientProps) => {
    const {data:session, status } = useSession();
    const router = useRouter();

    const form = useForm <z.infer<typeof checkoutSchema>>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            mpesa_number: "",
        }
    })

    const cart = useCartStore((state) => state.cart);
    const totalItems = useCartStore((state) => state.getTotalItems());
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const clearCart = useCartStore((state) => state.clearCart);


    const onSubmit = async (values: z.infer<typeof checkoutSchema>) => {
        

        const payload = {
            products: cart,
            quantity: totalItems,
            total_amount: total,
            mpesa_number: values.mpesa_number
        };

        

        const resp = await ApiRequests.post("orders/place-order/", payload, session?.sessionToken);
        console.log(resp);
        if(resp.success){
            toast.success(resp.message);
            router.push("/user/orders");
            clearCart();
        } else {
            toast.error(resp.message);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 space-y-6">
                <div>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <h1 className="font-semibold text-sm">Customer Address</h1>

                                <Link href="" className="flex text-sm items-center">Change <ChevronRight size={18} /></Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h1 className="text-slate-500">{user?.fullname}</h1>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <h1 className="font-semibold text-sm">Delivery Details</h1>

                                <Link href="" className="flex text-sm items-center">Change <ChevronRight size={18} /></Link>
                            </div>
                        </CardHeader>
                        <CardContent>

                            {cart.map((item: any) => (
                                <div key={item.id} className="grid grid-cols-12 gap-3 py-2 border-b-1 border-slate-300 border-dotted">
                                    <div className="col-span-2">
                                        <Image src={item.image} alt={`${item.name}`} width={80} height={80} />
                                    </div>
                                    <div className="col-span-10">
                                        <p className="capitalize line-clamp-2 text-slate-500 text-elipsis text-sm">{item.name}</p>
                                        <p className="text-xs text-qsecondary font-semibold">KSh {parseFloat(item.price).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>


                <div>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between">
                                <h1 className="font-semibold text-sm">Payment Method</h1>


                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="w-[60%]">
                            
                                <CustomFormField
                                    label="Pay Now with M-Pesa"
                                    fieldType="input"
                                    name="mpesa_number"
                                    inputType="tel"
                                    control={form.control}
                                    placeholder="e.g 2547......"

                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="md:col-span-4">
                <Card>
                    <CardHeader className="font-bold">
                        Order Summary
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-3">
                        <p className="flex justify-between text-sm">Items total ({totalItems})  <span>KSh {total.toLocaleString()}</span></p>
                        <p className="flex justify-between text-sm">Delivery fees  <span>KSh {total.toLocaleString()}</span></p>

                        <h1 className="flex justify-between font-semibold pt-4">Total <span>KSh {total.toLocaleString()}</span></h1>

                        <div className="w-full mt-8">
                            <Button className="bg-qprimary cursor-pointer w-full">Place Order</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    );
}

export default CheckoutClient