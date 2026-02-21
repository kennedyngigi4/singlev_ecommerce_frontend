"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard, ProductData } from '@/lib/models/products';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWishStore } from '@/store/wishList';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

interface ProductClientProps {
    productData: ProductData;
}

const ProductClient = ({ productData }: ProductClientProps) => {

    const addToCart = useCartStore((state) => state.addToCart);
    const addToWishList = useWishStore((state) => state.addToWish);

    const onAddToCart = (product: any) => {
        addToCart({
            id: product?.default_variant.id,
            name: product.name,
            price: parseInt(product?.default_variant.price),
            quantity: 1,
            image: product?.thumbnail,
        });
        toast.success(`${product.name.slice(0, 22)}... added to cart!`);
    }


    const onAddToWish = async (product: ProductCard) => {
        addToWishList({
            id: product?.default_variant.id,
            name: product.name,
            price: parseInt(product?.default_variant.price),
            quantity: 1,
            image: product?.thumbnail,
        });
        toast.success(`${product.name.slice(0, 22)}... added to wish list!`);
    }

    return (
        <div className="container min-h-screen flex flex-col space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-5 pb-3">
                <div className="md:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-white rounded p-3">
                        <div className="md:col-span-4">
                            <div className="relative h-full md:h-[270px]">
                                <Image src={productData?.thumbnail} alt={`QUZA Leading Online Shop in Kenya ${productData?.name} available, ${productData?.category} products available, ${productData?.brand} available`} fill className="object-contain" />
                            </div>
                        </div>
                        <div className="md:col-span-8 relative">

                            <div className="absolute top-0 right-0">
                                <Button variant="ghost" onClick={() => onAddToWish(productData)} className="cursor-pointer"><HeartIcon /></Button>
                            </div>

                            <div className="pb-3 pe-5">
                                <h1 className="text-xl">{productData?.name}</h1>
                                <p className="text-slate-500 text-sm">Brand: {productData?.brand}</p>
                                <p className="pb-5 text-slate-500 text-xs">{productData?.category}</p>
                            </div>
                            

                            <p className="font-bold text-qsecondary mb-6">KSh {parseInt(productData?.default_variant?.price).toLocaleString()}</p>

                            <div className='pb-5'>
                                <p className="text-sm text-slate-500 line-clamp-4 text-ellipsis">{productData?.description}</p>
                            </div>
                            <div className="flex space-x-3.5">
                                <Button className='bg-qprimary cursor-pointer' onClick={() => onAddToCart(productData)}><ShoppingCartIcon /> Add to Cart</Button>

                                <Link href={`https://wa.me/254119441639/?text=Hello Quza, is ${productData.name}, KSh ${parseInt(productData?.default_variant?.price)} available?`} target="_blank">
                                    <Button className='bg-green-600 hover:bg-green-800 cursor-pointer'><FaWhatsapp /> WhatsApp Enquiry</Button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <aside>
                        <Card>
                            <CardHeader>
                                <CardTitle>Delivery</CardTitle>
                                <CardDescription>For delivery choose your region and nearest location.</CardDescription>
                            </CardHeader>
                            <CardContent></CardContent>
                        </Card>
                    </aside>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-5 pt-5 pb-3">
                <h1 className="font-bold text-qsecondary text-2xl">Recently Viewed</h1>
                <p></p>
            </div>
        </div>
    );
}

export default ProductClient