"use client";

import React from 'react'
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { ShoppingCartIcon, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CartPage = () => {
    const {data:session, status } = useSession();
    const router = useRouter();
    const { cart, removeFromCart, updateQuantity } = useCartStore();
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const totalItems = useCartStore((state) => state.getTotalItems());


    const checkOut = async() => {
        if(status !== "authenticated"){
            toast.error("Please login to checkout.");
            router.push("/login");
        } else {
            router.push("/user/checkout");
        }
    }

    return (
        <div className="container py-5 min-h-screen">

            {cart.length > 0 
                ? <>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                        <div className="md:col-span-8 bg-white px-5 py-4 rounded shadow">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between space-x-5 py-3 border-b-2 border-gray-50 ">

                                    <div>
                                        <div className="flex space-x-5">
                                            <Image src={item.image} alt={`${item.name}`} width={80} height={80} />
                                            <p className="line-clamp-2 text-sm">{item.name}</p>
                                        </div>
                                        <Button size="xs" variant="destructive" className="mt-3 cursor-pointer" onClick={() => removeFromCart(item.id)}><Trash2 /> Remove</Button>
                                    </div>
                                    <div className="mx-15">
                                        <h1 className="text-qprimary font-bold text-sm flex">KSh {item.price.toLocaleString()}</h1>
                                        
                                        <div className='flex items-center space-x-4 pt-4'>
                                            <Button size="icon-xs" className="bg-red-600 cursor-pointer" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                -
                                            </Button>
                                            <p>{item.quantity}</p>
                                            <Button size="icon-xs" className="bg-green-600 cursor-pointer" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                +
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-4 bg-white">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cart Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between pb-3">
                                        <h1>Items({totalItems})</h1>
                                        <p className="font-normal text-slate-500">KSh {total.toLocaleString()}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h1>Subtotal</h1>
                                        <p className="font-bold">KSh {total.toLocaleString()}</p>
                                    </div>

                                    <div className="w-full">
                                        <Button className="bg-qprimary mt-8 w-full cursor-pointer" onClick={checkOut}>Checkout (KSh {total.toLocaleString()})</Button>
                                    </div>
                                    
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </> 
                : 
                <>
                    <div className="flex flex-col space-y-6 bg-white shadow justify-center items-center py-20">
                        <ShoppingCartIcon size={80} className="text-qprimary" />

                        <h1 className="font-semibold text-qsecondary">Your cart is empty!</h1>

                        <Link href="/">
                            <Button size="lg" className="cursor-pointer bg-qsecondary rounded-none hover:bg-qprimary">Continue Shopping</Button>
                        </Link>
                    </div>
                </>}
            
        </div>
    )
}

export default CartPage