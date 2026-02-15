"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CustomFormField from '@/components/ui/custom-form-field';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { orderPaymentSchema } from '@/lib/validations/validations';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApiRequests } from '@/lib/requests/api_requests';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

export interface MpesaPaymentModalProps {
    orderid: string;
    amount: string;
}

const MpesaPaymentModal = ({ orderid, amount }: MpesaPaymentModalProps) => {
    const { data:session} = useSession();
    const form = useForm<z.infer<typeof orderPaymentSchema>>({
        resolver: zodResolver(orderPaymentSchema),
        defaultValues: {
            mpesa_number: "",
            order_id: "",
            total_amount: "",
        }
    });


    
    useEffect(() => {
        if (orderid && amount) {
            form.reset({
                order_id: orderid,
                total_amount: amount,
                mpesa_number: "",
            });
        }
    }, [orderid, amount, form]);

    const onSubmit = async(values: z.infer<typeof orderPaymentSchema>) => {
        
        const resp = await ApiRequests.post("orders/order-payment/", values, session?.sessionToken);
        if(resp.success){
            toast.success(resp.message);
        } else {
            toast.success(resp.message);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="xs" className="cursor-pointer">Pay Now</Button>
            </DialogTrigger>
            <DialogContent> 
                <DialogHeader>
                    <DialogTitle>Complete Payment</DialogTitle>
                </DialogHeader>
                <div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                        <div>
                            <CustomFormField
                                label='Order ID'
                                fieldType='input'
                                control={form.control}
                                name='order_id'
                                disabled="true"
                            />
                        </div>
                        <div>
                            <CustomFormField
                                label='Total Payable Amount'
                                fieldType='input'
                                control={form.control}
                                name='total_amount'
                                disabled="true"
                            />
                        </div>
                        <div>
                            <CustomFormField
                                label='Mpesa Number'
                                fieldType='input'
                                control={form.control}
                                name='mpesa_number'
                            />
                        </div>

                        <div className="w-full">
                            <Button className="w-full cursor-pointer">Complete Payment</Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default MpesaPaymentModal