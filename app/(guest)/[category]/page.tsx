import React from 'react';
import { ApiRequests } from '@/lib/requests/api_requests';
import CategoryPageClient from './pageClient';


type CategoryPageProps = {
  params: {
    category: string;
  }
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const {category} = params;
  
  const data = await ApiRequests.serverGet(`products/${category}/`);

  if (!data || data.success === false) {
    return <div className="w-full h-screen justify-center items-center">Failed to load product data.</div>;
  }

  
  return (
    <CategoryPageClient data={data} />
  )
}

export default CategoryPage