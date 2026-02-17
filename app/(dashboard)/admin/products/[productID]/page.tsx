import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests';
import PageClient from './pageClient';
import { auth } from '@/auth';

type ProductDetailsProps = {
  params: Promise<{
    productID: string;
  }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { productID } = await params;
  const session = await auth();

  if(!session?.sessionToken) return;
  

  const product = await ApiRequests.get(`superadmin/products/products/${productID}/`, session?.sessionToken);
  const [categories, brands, featuresList] = await Promise.all([
    ApiRequests.get("superadmin/products/category-children/", session.sessionToken),
    ApiRequests.get("products/brands/", session.sessionToken),
    ApiRequests.get("products/features/", session.sessionToken),
  ]);
          
 
  
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