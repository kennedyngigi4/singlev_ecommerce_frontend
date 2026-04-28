import { auth } from "../../auth";
import { User } from "../models/user";

export async function getUserProfile(): Promise<User | null> {
    const session = await auth();


    if (!session) return null;

    const res = await fetch(`${process.env.APIURL}/account/me/`, {
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
        cache: "no-store",
    });


    if(!res.ok) return null;

    return res.json();
}


