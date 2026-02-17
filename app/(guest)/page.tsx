import { ApiRequests } from "@/lib/requests/api_requests";
import HomepageClient from "./page-client";

export const dynamic = 'force-dynamic';

const page = async () => {
    const featuredProducts = await ApiRequests.serverGet("products/home/");
    const categories = await fetch(
        `${process.env.APIURL}/products/categories/`,
        { cache: "no-store" }
    ).then(res => res.json());

    return <HomepageClient featured={featuredProducts} categories={categories} />;
};

export default page;