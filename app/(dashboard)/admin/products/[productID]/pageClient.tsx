"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronRight, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import Link from 'next/link';
import CustomFormField from '@/components/ui/custom-form-field';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/lib/validations/admin_validations';
import * as z from "zod";
import { SelectItem } from '@/components/ui/select';
import { Feature } from '@/lib/models/products';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { ApiRequests } from '@/lib/requests/api_requests';
import { FieldGroup, FieldSet } from '@/components/ui/field';

export interface PageClientProps {
    product: any;
    categories: any;
    brands: any;
    features: any;
}

const PageClient = ({ product, categories, brands, features }: PageClientProps) => {
    const { data:session, status } = useSession();
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            category: "",
            brand: "",
            description: "",
            features: "",
            tags: "",
        }
    })

    useEffect(() => {
        if (!product) return;
        form.reset({
            name: product.name || "",
            category: product.category_id || "",
            brand: product.brand_id || "",
            description: product.description || "",
            features: product.features?.[0] || "",
            tags: product.tags || "",
        });
        
    }, [product]);


    const onProductUpdate = async(values: z.infer<typeof productSchema>) => {
        
        try {
            if (!session?.sessionToken) return;
            const payload = {
                ...values,
                features: values.features ? [values.features] : [],
                
            }

            const resp = await ApiRequests.patch(`superadmin/products/products/${product.id}/`, session?.sessionToken, payload);
            
            if(resp.success){
                toast.success("Product updated.");
            } else {
                toast.error("An error occured.");
            }
        } catch(e) {
            toast.error("A network error occured: "+e);
        }
    }

    return (
        <div className="flex flex-col space-y-5">
            <Link className="flex items-center text-sm" href="/admin/products"><ArrowLeft size={15} /> Products</Link>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white p-4">

                <div className="md:col-span-2">
                    <Image src={product.thumbnail} alt={`${product.name}`} width={100} height={100} />
                </div>

                <div className="md:col-span-6">
                    <h1 className="text-qprimary line-clamp-2 text-ellipsis">{product.name}</h1>
                    <p className='text-sm flex items-center'>{product.category} <ChevronRight size="15" /> {product.brand}</p>
                </div>

                <div className="md:col-span-4">

                </div>

            </div>


            <div className="flex flex-col bg-white p-4">
                <div className="pb-3">
                    <h1 className="font-semibold">Edit Product</h1>
                </div>

                <div>
                    <form onSubmit={form.handleSubmit(onProductUpdate)} className="flex flex-col space-y-4.5">
                        <FieldSet>
                            <FieldGroup className="gap-4">
                                <div>
                                    <CustomFormField
                                        fieldType="input"
                                        name="name"
                                        label="Name"
                                        control={form.control}
                                        placeholder="e.g Airmax shoes"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <CustomFormField
                                            fieldType="select"
                                            label="Choose category"
                                            name="category"
                                            control={form.control}
                                            placeholder="Choose a category"
                                        >
                                            
                                            {categories.map((category: any) => (
                                                <SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
                                            ))}
                                        </CustomFormField>
                                    </div>
                                    <div>
                                        <CustomFormField
                                            fieldType="select"
                                            name="brand"
                                            label="Choose brand"
                                            control={form.control}
                                            placeholder="Choose a brand"
                                        >
                                            {brands.map((brand: any) => (
                                                <SelectItem value={brand.id} key={brand.id}>{brand.name}</SelectItem>
                                            ))}
                                        </CustomFormField>
                                    </div>
                                    <div>
                                        <CustomFormField
                                            fieldType="select"
                                            name="features"
                                            label="Choose home page feature"
                                            control={form.control}
                                            placeholder="Choose a feature (optional)"
                                        >
                                            {features.map((feature: Feature) => (
                                                <SelectItem value={feature.id} key={feature.id}>{feature.name}</SelectItem>
                                            ))}
                                        </CustomFormField>
                                    </div>
                                </div>
                                <div>
                                    <CustomFormField
                                        fieldType="textarea"
                                        name="description"
                                        label="Description"
                                        control={form.control}
                                        placeholder="Enter product description here ..."
                                    />
                                </div>
                            </FieldGroup>
                        </FieldSet>

                        <div>
                            <Button type="submit" className="cursor-pointer">Save changes</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-col space-y-5 bg-white p-5">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-semibold">Available variants</h1>
                    </div>
                    <Link href={`/admin/products/${product.id}/variant/`}>
                        <Button className="cursor-pointer" size="sm" variant="outline"><PlusIcon /> Add Variant</Button>
                    </Link>
                    
                </div>
                <div>
                    <DataTable columns={columns} data={product?.variants} />
                </div>
            </div>


        </div>
    )
}

export default PageClient