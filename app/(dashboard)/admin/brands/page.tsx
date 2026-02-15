"use client";

import React, { useEffect, useState } from 'react';
import * as z from "zod";
import { brandSchema } from '@/lib/validations/admin_validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldGroup, FieldSet } from '@/components/ui/field';
import CustomFormField from '@/components/ui/custom-form-field';
import { SelectItem } from '@/components/ui/select';
import CustomButton from '@/components/ui/custom-button';
import { Brand, Category } from '@/lib/models/products';
import { ApiRequests } from '@/lib/requests/api_requests';
import { BrandTable } from './_components/data-table';
import { brandColumns } from './_components/columns';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const BrandsPage = () => {
    const { data:session, status} = useSession();
    const router = useRouter();
    
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);

    const form = useForm<z.infer <typeof brandSchema>>({
        resolver: zodResolver(brandSchema),
        defaultValues: {
            name: "",
            image: undefined,
        }
    });


    useEffect(() => {
        const fetchCategories = async() => {
            const res = await ApiRequests.get("products/categories/");
            setCategories(res);
        }
        fetchCategories();
    }, []);


    useEffect(() => {
        const fetchBrands = async () => {
            const res = await ApiRequests.get("products/brands/");
            setBrands(res);
        }
        fetchBrands();
    }, []);


    const onSubmit = async(values: z.infer<typeof brandSchema>) => {
        setIsLoading(true);
        try {
            if (!session?.sessionToken) return;

            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("image", values.image);

            const res = await ApiRequests.post("superadmin/products/brands/", formData, session?.sessionToken);
            
            if (res.success) {
                toast.success(res.message);

                router.refresh();
            } else {
                toast.error(res.message);
            }
        } catch (e) {
            toast.error("A Network error occured.")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-4 rounded-xl border p-4 bg-white w-full">
                <h1 className="font-bold">Add Brand</h1>

                <form className="pt-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldGroup>
                            <CustomFormField
                                fieldType="input"
                                label="Name"
                                name="name"
                                control={form.control}
                                placeholder="e.g. Nike"
                            />

                            


                            <CustomFormField
                                fieldType="file"
                                inputType='file'
                                label="Image/ logo"
                                name="image"
                                control={form.control}
                                
                            />

                            <Field>
                                <CustomButton label="Add Category" loading={isLoading} loadingText="Processing" />
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                </form>
            </div>

            <div className="md:col-span-8 rounded-xl border p-4 bg-white overflow-x-auto w-full">
                <BrandTable columns={brandColumns} data={brands} />
            </div>
        </div>
    );
}

export default BrandsPage