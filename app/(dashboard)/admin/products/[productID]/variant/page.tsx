"use client";

import { Button } from '@/components/ui/button';
import CustomFormField from '@/components/ui/custom-form-field';
import { FieldGroup, FieldSet } from '@/components/ui/field';
import { ApiRequests } from '@/lib/requests/api_requests';
import { variantSchema } from '@/lib/validations/admin_validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from "zod";


const ProductVariant = () => {
  const { data:session, status } = useSession();
  const params = useParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof variantSchema>>({
    resolver: zodResolver(variantSchema),
    defaultValues: {
      price: "",
      discountprice: "",
      size: "",
      color: "",
      stock: "",
      sku: "",
    }
  });


  const onSubmit = async(values: z.infer<typeof variantSchema>) => {
    
    try {
      if (!session?.sessionToken) return;
      const payload = {
        "sku": values.sku,
        "price": values.price,
        "discount_price": values.discountprice,
        "size": values.size,
        "color": values.color, 
        "stock": values.stock,
        "product": params.productID,
      }

      console.log(payload);
      const resp = await ApiRequests.post("superadmin/products/add-variant/", payload, session?.sessionToken);
      console.log(resp)
      if(resp.success){
        toast.success(resp.message);
        router.push(`/admin/products/${params.productID}/`);
      } else {
        toast.error(resp.message);
      }
    } catch(e){
      toast.error("A network error occured.");
    }
  }

  return (
    <div className="w-[65%] bg-white p-5 mx-auto">
      <Link href={`/admin/products/${params.productID}/`} className="flex items-center pb-4 font-semibold"><ArrowLeft size={15} /> Product</Link>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
            <div>
              <CustomFormField 
                label="Product sku"
                fieldType="input"
                name="sku"
                control={form.control}
                placeholder="sku"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <CustomFormField
                  label="Size"
                  fieldType="input"
                  name="size"
                  control={form.control}
                  placeholder="size"
                />
              </div>
              <div>
                <CustomFormField
                  label="Color"
                  fieldType="input"
                  name="color"
                  control={form.control}
                  placeholder="color"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <CustomFormField
                  label="Price (KSh)"
                  fieldType="input"
                  name="price"
                  control={form.control}
                  placeholder="e.g 1500"
                />
              </div>
              <div>
                <CustomFormField
                  label="Discounted price (KSh)"
                  fieldType="input"
                  name="discountprice"
                  control={form.control}
                  placeholder="e.g 1250"
                />
              </div>
            </div>
          </FieldGroup>
        </FieldSet>
        <div className="mt-4">
          <Button type="submit" className="cursor-pointer">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default ProductVariant