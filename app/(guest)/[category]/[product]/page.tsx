
import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests';
import ProductClient from './product-client';

type ProductDetailsProps = {
    params: Promise<{
        category: string;
        product: string;
    }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {

    const { category, product } = params;
    const productData = await ApiRequests.get(`products/${category}/${product}/`);

    if (!productData) {
        return <div className="w-full h-screen justify-center items-center">Failed to load product data.</div>;
    }

    return (
        <ProductClient productData={productData} />
    )
}

export default ProductDetails