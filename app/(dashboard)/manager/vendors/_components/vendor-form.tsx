"use client";

import React from 'react'
import * as z from "zod";
import { newVendorSchema } from '@/lib/validations/validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomFormField from '@/components/ui/custom-form-field';
import { FieldGroup } from '@/components/ui/field';
import CustomButton from '@/components/ui/custom-button';
import { toast } from 'sonner';
import { ApiRequests } from '@/lib/requests/api_requests';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const VendorForm = () => {
  const { data:session } = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof newVendorSchema>>({
    resolver: zodResolver(newVendorSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      businessName: "",
      businessPhone: "",
      businessLocation: "",
    }
  });
  const { isSubmitting } = form.formState;


  const onSubmit = async (values: z.infer<typeof newVendorSchema>) => {
    try{
      const payload = {
        "fullname": values.fullname,
        "email": values.email,
        "phone": values.phone,
        "password": values.phone,
        "role": "vendor",

        "business_name": values.businessName,
        "business_phone": values.businessPhone,
        "business_location": values.businessLocation,
        "business_status": "approved",
      }

      const resp = await ApiRequests.post("manager/vendors/", payload, session?.accessToken);
      if(resp.success){
        toast.success(resp.message);
        router.push("/manager/vendors");
      } else {
        toast.error(resp.message);
      }
    } catch(err){
      toast.error("A network error occured.");
    }
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <div className="flex flex-col p-6 border-2 border-slate-200 bg-white rounded-2xl">
          <h1 className="font-semibold text-lg text-qprimary">Personal Information</h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-8">
              <CustomFormField 
                fieldType="input"
                inputType="text"
                name="fullname"
                control={form.control}
                placeholder="e.g John Doe"
                label="User Full Name"
              />
            </div>

            <div className="md:col-span-4">
              <CustomFormField
                fieldType="input"
                inputType="email"
                name="email"
                control={form.control}
                placeholder="e.g johndoe@email.com"
                label="User Email"
                description="Email will be used for login."
              />
            </div>

            <div className="md:col-span-6">
              <CustomFormField
                fieldType="input"
                inputType="tel"
                name="phone"
                control={form.control}
                placeholder="e.g 254 722 ......."
                label="User Phone"
              />
            </div>

            <div className="md:col-span-6">
              
            </div>
          </div>
        </div>


        <div className="flex flex-col p-6 border-2 border-slate-200 bg-white rounded-2xl">
          <h1 className="font-semibold text-lg text-qprimary">Business Information</h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6">
              <CustomFormField
                fieldType="input"
                inputType="text"
                name="businessName"
                control={form.control}
                placeholder="e.g Quza Maisha"
                label="Business Name"
              />
            </div>

            <div className="md:col-span-6">
              <CustomFormField
                fieldType="input"
                inputType="tel"
                name="businessPhone"
                control={form.control}
                placeholder="e.g 254 722......."
                label="Business Phone"
              />
            </div>

            <div className="md:col-span-6">
              <CustomFormField
                fieldType="input"
                inputType="text"
                name="businessLocation"
                control={form.control}
                placeholder="e.g Imenti house, nairobi Kenya"
                label="Business Location"
              />
            </div>
          </div>
        </div>

        <div>
          <CustomButton 
            label="Register Vendor"
            btnType="submit"
          />
        </div>

      </form>
    </div>
  )
}

export default VendorForm