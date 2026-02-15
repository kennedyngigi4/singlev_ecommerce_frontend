import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests';
import PageClient from './pageClient';
import { auth } from '@/auth';

type ProductDetailsProps = {
  params: {
    productID: string;
  }
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const session = await auth();

  if(!session?.sessionToken) return;
  

  const product = await ApiRequests.get(`superadmin/products/products/${params.productID}/`, session?.sessionToken);
  const [categories, brands, featuresList] = await Promise.all([
    ApiRequests.get("superadmin/products/category-children/"),
    ApiRequests.get("products/brands/"),
    ApiRequests.get("products/features/"),
  ]);
          
  console.log(product);
  
  if(!product){
    return (
      <p>Loading product data .....</p>
    );
  }

  return (
    <PageClient product={product} categories={categories} brands={brands} features={featuresList} />
  )
}

export default ProductDetails