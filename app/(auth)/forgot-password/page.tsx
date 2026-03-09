"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CustomButton from '@/components/ui/custom-button';
import CustomFormField from '@/components/ui/custom-form-field';
import { Field, FieldGroup, FieldSet } from '@/components/ui/field';
import Link from 'next/link';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { forgotPasswordSchema } from '@/lib/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApiRequests } from '@/lib/requests/api_requests';
import { toast } from 'sonner';

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading ] = useState(false);

  const form = useForm<z.infer <typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  });


  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    try{
      setIsLoading(true);
      const response = await ApiRequests.post("account/password-reset/", values);
      console.log(response);
    } catch(err) {
      toast.error("A server error occured.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card className="px-10 shadow-none md:w-125 w-full">

        <CardContent className="flex flex-col items-center justify-center w-full">
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h1 className="text-3xl font-bold">Forgot Password</h1>

            <div className="flex flex-col items-center">
              
              <p className="text-slate-500 text-sm">Enter your email address to receive a password reset link.</p>
            </div>
          </div>

          <form className="w-full pt-6" onSubmit={form.handleSubmit(onSubmit)}>

            <FieldSet>
              <FieldGroup className="gap-4">

                <CustomFormField
                  label="Email"
                  fieldType="input"
                  name="email"
                  inputType="email"
                  control={form.control}
                  placeholder="e.g johndoe@email.xyz"

                />

                

                <Field className="w-full">
                  <CustomButton loading={isLoading} loadingText="Processing ..." label="Forgot Password" />
                </Field>

              </FieldGroup>
            </FieldSet>
          </form>

          <div className='flex flex-col items-center pt-8 space-y-6'>
            <Link href="/login" className="text-qprimary text-sm">Login</Link>
          </div>



        </CardContent>
      </Card>
    </div>
  )
}

export default ForgotPasswordPage