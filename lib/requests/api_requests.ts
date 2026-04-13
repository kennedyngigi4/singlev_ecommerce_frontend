export const ApiRequests = {
    
    post: async function (url: string, data: FormData | Record<string, any>, token?: string | null,) : Promise<any> {
        try{
            const isFormData = data instanceof FormData;
            
            const headers: Record<string, any> = {};
            if(token) headers["Authorization"] = `Bearer ${token}`;
            if(!isFormData) headers["Content-Type"] = "application/json";

            const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/${url}`, {
                method: "POST",
                headers: headers,
                body: isFormData ? data : JSON.stringify(data),
            });
            const res = await safeParseJSON(response);

            if(!response.ok){
                return { success: false, message: res.errors}
            }

            return res;

        } catch(e){
            return { success: false, message: "An error occurred." };
        }
    },



    get: async function (url: string, token?: string | null): Promise<any> {
        try {
            const headers: Record<string, any> = {};
            if(token) headers["Authorization"] = `Bearer ${token}`;

            const base = process.env.NEXT_PUBLIC_APIURL?.replace(/\/$/, "");
            const path = url.replace(/^\//, "");

            const response = await fetch(`${base}/${path}`, {
                method: "GET",
                headers: headers,
                
            });
            const res = await safeParseJSON(response);

            if (!response.ok) {
                return { success: false, message: res?.errors || "Request failed." }
            }

            return res;

        } catch (e) {
            return { success: false, message: "An error occurred." };
        }
    },

    serverGet: async function (url: string, token?: string | null): Promise<any> {
        try {
            const headers: Record<string, any> = {};
            if (token) headers["Authorization"] = `Bearer ${token}`;

            const response = await fetch(`${process.env.APIURL}/${url}`, {
                method: "GET",
                headers: headers,
                cache: "no-store"
            });
            const res = await safeParseJSON(response);

            if (!response.ok) {
                return { success: false, message: res?.errors || "Request failed." }
            }

            return res;

        } catch (e) {
            return { success: false, message: "An error occurred." };
        }
    },



    patch: async function (url: string, token: string | null, data: FormData | Record<string, any>): Promise<any> {
        try {
            const isFormData = data instanceof FormData;

            const headers: Record<string, any> = {};
            if (token) headers["Authorization"] = `Bearer ${token}`;
            if (!isFormData) headers["Content-Type"] = "application/json";

            const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/${url}`, {
                method: "PATCH",
                headers: headers,
                body: isFormData ? data : JSON.stringify(data),
            });
            const res = await safeParseJSON(response);

            if (!response.ok) {
                return { success: false, message: res.errors }
            }

            return res;

        } catch (e) {
            return { success: false, message: "An error occurred." };
        }
    },


    delete: async function (url: string, token: string | null, data: FormData | Record<string, any>): Promise<any> {
        try {

        } catch (e) {
            return { success: false, message: "An error occurred." };
        }
    }


}


async function safeParseJSON(response: Response) {
    const text = await response.text();

    try {
        return JSON.parse(text);
    } catch {
        console.error("Non-JSON API response:", text);
        return null;
    }
}


