
import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests';
import ProductClient from './product-client';

type ProductDetailsProps = {
    params: {
        category: string;
        product: string;
    }
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const product = await ApiRequests.get(`products/${params.category}/${params.product}/`);

    return (
        <ProductClient product={product} />
    )
}

export default ProductDetails