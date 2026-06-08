"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CustomFormField from '@/components/ui/custom-form-field';
import { Field, FieldGroup, FieldSet } from '@/components/ui/field';
import Link from 'next/link';
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/lib/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from '@/components/ui/custom-button';
import { toast } from 'sonner';
import { AuthRequests } from '@/lib/requests/auth_requests';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';



const roleRedirectMap: Record<string, string> = {
  admin: "/admin",
  manager: "/manager",
  client: "/user",
  vendor: "/vendor",
}

const LoginPage = () => {
  const { data:session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });


  useEffect(() => {
    if(status === "authenticated" && session?.user?.role){
      const redirectTo = roleRedirectMap[session.user.role] || "/";
      router.replace(redirectTo);
    }
  }, [status, session]);


  const onSubmit = async (values: z.infer<typeof loginSchema>) => {

    setIsLoading(true);

    try {
      const res = await AuthRequests.login(values.email, values.password);

      if (res.success) {
        toast.success("Login successful.");
       
      } else {
        toast.error(res.message);
      }
    } catch (e) {
      toast.error("A network error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card className="px-10 shadow-none md:w-125 w-full">

        <CardContent className="flex flex-col items-center justify-center w-full">
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h1 className="text-3xl font-bold">Log In</h1>

            <div className="flex flex-col items-center">
              <h1 className="text-xl font-medium text-qprimary">Welcome back</h1>
              <p className="text-slate-500 text-sm">Use your email address and password to log in to <span className="font-bold">QUZA</span></p>
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

                <CustomFormField
                  label="Password"
                  fieldType="input"
                  name="password"
                  inputType="password"
                  control={form.control}
                  placeholder="e.g ********"
                />

                <Field className="w-full">
                  <CustomButton loading={isLoading} loadingText="Authenticating ..." label="Login" />
                </Field>

              </FieldGroup>
            </FieldSet>
          </form>

          <div className='flex flex-col items-center pt-8 space-y-6'>
            <Link href="/forgot-password" className="text-qprimary text-sm">Forgot your Password?</Link>

            <p className="text-sm">Don't have an account yet? <Link href="/register" className="text-qprimary">Register</Link></p>
          </div>



        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage