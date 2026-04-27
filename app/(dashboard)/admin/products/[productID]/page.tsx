import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests';
import PageClient from './pageclient';
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
  
  const categoriesResp = await ApiRequests.get("superadmin/products/category-children/", session.sessionToken);
  const brandsResp = await ApiRequests.get("products/brands/", session.sessionToken);
  const featuresResp = await ApiRequests.get("products/features/", session.sessionToken);

  const categories = Array.isArray(categoriesResp) ? categoriesResp : categoriesResp?.results ?? [];
  const brands = Array.isArray(brandsResp) ? brandsResp : brandsResp?.results ?? [];
  const featuresList = Array.isArray(featuresResp) ? featuresResp : featuresResp?.results ?? [];
          
 
  
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