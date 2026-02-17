"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/lib/models/products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingBasketIcon } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';


export interface ProductCardProps {
    product: ProductCard;
}

const ProductCardComponent = ({ product }: ProductCardProps) => {

    const addToCart = useCartStore((state) => state.addToCart);

    const onAddToCart = (product: any) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: parseInt(product.price),
            quantity: 1,
            image: product?.thumbnail,
        });
        toast.success(`${product.name.slice(0, 22)}... added to cart!`);
    }

    return (
        <div className="p-1.5 shadow-xs rounded-2xl border-2 border-slate-50 bg-white">
            
            <Link key={product.id} href={`${product.category}/${product.slug}`}>
                <div className="relative w-full h-20 md:h-35">
                    <Image src={product?.thumbnail} alt={`QUZA online shopping in Nairobi kenya, ${product.name}, ${product.category}`} fill className="object-contain" />
                </div>
                <h1 className="line-clamp-2 text-ellipsis text-sm pt-2">{product.name}</h1>
            </Link>
            
            <div className="flex justify-between items-center pt-2">
                <p className="font-semibold text-xs md:text-sm text-qprimary">KSh {parseFloat(product?.price).toLocaleString()}</p>

                <div>
                    <Button variant="ghost" size="icon" onClick={() => onAddToCart(product)}  className="bg-qsecondary/20 hover:bg-qprimary/20 cursor-pointer"><ShoppingBasketIcon /></Button>
                </div>
            </div>
            
        </div>
    );
}

export default ProductCardComponent