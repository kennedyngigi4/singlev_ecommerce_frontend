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
  
  const data = await ApiRequests.serverGet(`products/${params.category}/`);
  
  

  return (
    <CategoryPageClient data={data} />
  )
}

export default CategoryPage