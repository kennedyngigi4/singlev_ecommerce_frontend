"use client";

import { signIn } from "next-auth/react";

export const AuthRequests = {

    register: async function(url: string, data: FormData | Record<string, any>) : Promise<any>{
        try {
            const isFormData = data instanceof FormData;            
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/${url}`, {
                method: "POST",
                headers: isFormData
                    ? undefined
                    : { "Content-Type": "application/json" },
                body: isFormData ? data : JSON.stringify(data),
            });

            
            
            let res: any;
            try{
                res = await response.json();
            } catch(e) {
                return { success: false, message: "Invalid server response." };
            }

            
            if(response.ok && res.success){
                return res;
            }


            if(!response.ok && res?.message) {
                return {
                    success: false,
                    message: res.message,
                    errors: res.errors || null,
                };
            }

        } catch(e) {
            return { "success": false, "message": "A network error occured."}
        }
    },


    login: async function(email: string, password: string) : Promise<any> {
        
        try{
            const res = await signIn('credentials', { email: email, password: password, redirect: false});
            console.log(res);

            if (res?.error) {
                return { success: false, message: "Invalid email or password.", }
            }

            if (res?.ok) {
                return { success: true, message: "Login successful." }
            }

            return { success: false, message: "Invalid email or password." }
            
        } catch(e){
            return {
                success: false,
                message: "Network error. Please check your connection and try again.",
            }
        }
    }
}



