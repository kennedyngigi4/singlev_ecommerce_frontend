"use client";

import React, { useState } from 'react';
import { ProductCard } from '@/lib/models/products';
import ProductCardComponent from '../../_components/product-card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface RootCategoryProps {
    data: any;
}

const RootCategory = ({ data }: RootCategoryProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [minPrice, setMinPrice] = useState(searchParams.get("min") || "");
    const [maxPrice, setMaxPrice] = useState(searchParams.get("max") || "");

    const applyPriceFilter = async() => {

    }
   


    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

            <div className="hidden md:flex flex-col space-y-1 mt-2 md:col-span-2 bg-white p-3 rounded">
                <div className="pb-4 border-b-2 border-slate-50">
                    <h1 className="font-bold">Categories</h1>
                    
                    <div className="space-y-2 pt-2">
                        {data.children.map((category: any) => (
                            <div key={category.id}>
                                <FieldGroup>
                                    <Field orientation="horizontal">
                                        <Checkbox id={category.name} name={category.name} />
                                        <FieldLabel htmlFor="terms-checkbox-basic">
                                            {category.name}
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="py-2 border-b-2 border-slate-50">
                    <h1 className="font-bold">Brands</h1>

                    <div className="space-y-2 pt-2">
                        {data?.filters?.brands?.map((brand: any) => (
                            <div key={brand.brand__id}>
                                <FieldGroup>
                                    <Field orientation="horizontal">
                                        <Checkbox id={brand.brand__name} name={brand.brand__name} />
                                        <FieldLabel htmlFor="terms-checkbox-basic">
                                            {brand.brand__name}
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price filter */}
                <div className="py-3 border-b-2 border-slate-50">
                    <h1 className="font-bold">Price Range</h1>

                    <div className="space-y-3 pt-3">
                        <div className="flex gap-2">
                            <Input
                                type="number"
                                placeholder="Min"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <Input
                                type="number"
                                placeholder="Max"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>

                        <Button onClick={applyPriceFilter} className="w-full bg-qsecondary cursor-pointer" size="sm">
                            Apply
                        </Button>
                    </div>
                </div>
            </div>

            <div className="md:col-span-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {data.products.map((product: ProductCard) => (
                        <ProductCardComponent key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RootCategory