"use client";

import React, { useEffect, useState } from 'react';
import * as z from "zod";
import CustomFormField from '@/components/ui/custom-form-field';
import { categorySchema } from '@/lib/validations/admin_validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldGroup, FieldSet } from '@/components/ui/field';
import CustomButton from '@/components/ui/custom-button';
import { SelectItem } from '@/components/ui/select';
import { toast } from 'sonner';
import { ApiRequests } from '@/lib/requests/api_requests';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const CategoriesPage = () => {
  const { data:session, status} = useSession();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer <typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      parent: "",
      thumbnail: undefined,
    }
  });

  useEffect(() => {
    const fetchCategories = async() => {
      if (!session?.accessToken) return;

      const res = await ApiRequests.get("superadmin/products/categories/", session?.accessToken);
      setCategories(res);
    }
    fetchCategories();
  }, [session?.accessToken]);

  const onSubmit = async(values: z.infer<typeof categorySchema>) => {
    try {
     if (!session?.accessToken) return;

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("parent", values.parent);
      formData.append("thumbnail", values.thumbnail);

      const res = await ApiRequests.post("superadmin/products/categories/", formData, session?.accessToken);
      if(res.success){
        toast.success(res.message);
      }
    } catch(e){
      toast.error("A Network error occured.")
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
      <div className="md:col-span-4 rounded-xl border p-4 bg-white w-full">
        <h1 className="font-bold">Add Category</h1>

        <form className="pt-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet>
            <FieldGroup>
              <CustomFormField
                fieldType="input"
                label="Name"
                name="name"
                control={form.control}
                placeholder="e.g. Fashion"
              />

              <CustomFormField
                fieldType="select"
                label="Parent"
                name="parent"
                control={form.control}
              >
                <SelectItem value='None'>None</SelectItem>
                {categories.map((category: any) => (
                  <SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
                ))}
              </CustomFormField>
              
              <CustomFormField
                fieldType="file"
                inputType='file'
                label="Image/ logo"
                name="thumbnail"
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
        <DataTable columns={columns} data={categories} />
      </div>
    </div>
  )
}

export default CategoriesPage