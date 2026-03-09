"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import CustomButton from '@/components/ui/custom-button'
import CustomFormField from '@/components/ui/custom-form-field'
import { Field, FieldGroup, FieldSet } from '@/components/ui/field'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema } from '@/lib/validations/validations'
import * as z from "zod";
import { toast } from 'sonner'
import { ApiRequests } from '@/lib/requests/api_requests'
import { useSearchParams } from 'next/navigation'


const ResetPassword = () => {
    const [ isLoading, setIsLoading ] = useState(false);

    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password1: "",
            password2: "",
        }
    });

    const searchParams = useSearchParams()

    const uid = searchParams.get("uid")
    const token = searchParams.get("token")

    const onSubmit = async(values: z.infer<typeof resetPasswordSchema>) => {

        if(values.password1 !== values.password2){
            toast.error("Passwords do not match");
            return;
        }

        try {
            setIsLoading(true);
            
            const payload = {
                uid: uid,
                token: token,
                password: values.password1,
            }

            const resp = await ApiRequests.post("account/reset-password/", payload);
            console.log(resp);

        } catch (err) {
            toast.error("A network error occured.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Card className="px-10 shadow-none md:w-125 w-full">

                <CardContent className="flex flex-col items-center justify-center w-full">
                    <div className='flex flex-col items-center justify-center space-y-3'>
                        <h1 className="text-3xl font-bold">Reset Password</h1>

                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-medium text-qprimary">Reset Password</h1>
                            <p className="text-slate-500 text-sm">Enter and confirm your new password</p>
                        </div>
                    </div>

                    <form className="w-full pt-6" onSubmit={form.handleSubmit(onSubmit)}>

                        <FieldSet>
                            <FieldGroup className="gap-4">

                                <CustomFormField
                                    label="Password"
                                    fieldType="input"
                                    name="password"
                                    inputType="password"
                                    control={form.control}
                                    placeholder="e.g ********"
                                />

                                <CustomFormField
                                    label="Confirm Password"
                                    fieldType="input"
                                    name="password"
                                    inputType="password"
                                    control={form.control}
                                    placeholder="e.g ********"
                                />

                                <Field className="w-full">
                                    <CustomButton loading={isLoading} loadingText="Processing ..." label="RESET PASSWORD" />
                                </Field>

                            </FieldGroup>
                        </FieldSet>
                    </form>

                    



                </CardContent>
            </Card>
        </div>
    )
}

export default ResetPassword