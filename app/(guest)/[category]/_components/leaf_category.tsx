"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/lib/models/products';
import Image from 'next/image';
import Link from 'next/link';
import ProductCardComponent from '../../_components/product-card';

export interface LeafCategoryProps {
    data: any;
}

const LeafCategory = ({ data }: LeafCategoryProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12">

            <div className="md:col-span-2">

            </div>

            <div className="md:col-span-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {data.products.map((product: ProductCard) => (
                        <ProductCardComponent product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeafCategory