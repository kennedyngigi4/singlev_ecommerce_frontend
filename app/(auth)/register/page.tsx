"use client";

import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { registerSchema } from '@/lib/validations/validations';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CustomFormField from '@/components/ui/custom-form-field';
import { Field, FieldGroup, FieldSet } from '@/components/ui/field';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { AuthRequests } from '@/lib/requests/auth_requests';






const RegisterPage = () => {

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
    }
  });


  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const formData = new FormData
      formData.append("fullname", values.fullname);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);
      formData.append("role", "client");

      const res = await AuthRequests.register("account/register/", formData);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
        return;
      }

    } catch (e) {
      toast.error("An error occured.")
    }
  }

  return (
    <div>
      <Card className="px-10 shadow-none  md:w-125 w-full">
        <CardContent className="flex flex-col items-center justify-center">
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h1 className="text-3xl font-bold">Register</h1>

            <div className="flex flex-col items-center">
              <h1 className="text-xl font-medium text-qprimary">Welcome back</h1>
              <p className="text-slate-500 text-sm">Enter your details to register on <span className="font-bold">QUZA</span></p>
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full pt-6">

            <FieldSet>
              <FieldGroup className="gap-4">


                <CustomFormField
                  name="fullname"
                  fieldType="input"
                  inputType="text"
                  label="Full Name"
                  placeholder="e.g John Doe"
                  control={form.control}
                />

                <CustomFormField
                  name="email"
                  fieldType="input"
                  inputType="email"
                  label="Email"
                  placeholder="e.g johndoe@email.xyz"
                  control={form.control}
                />

                <CustomFormField
                  name="phone"
                  fieldType="input"
                  inputType="tel"
                  label="Phone"
                  placeholder="e.g +254 711 111 111"
                  control={form.control}
                />

                <CustomFormField
                  name="password"
                  fieldType="input"
                  inputType="password"
                  label="Password"
                  placeholder="********"
                  control={form.control}
                />

                <Field className="w-full">
                  <Button type="submit" className="cursor-pointer bg-qprimary rounded-2xl ">Register</Button>
                </Field>

              </FieldGroup>
            </FieldSet>
          </form>

          <div className='flex flex-col items-center pt-8 space-y-6'>
            <p className='text-sm'>Already have an account? <Link href="/login" className="text-qprimary">Login</Link></p>
          </div>



        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPage