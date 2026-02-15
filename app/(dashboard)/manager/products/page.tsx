import React from 'react'
import { ApiRequests } from '@/lib/requests/api_requests'
import { auth } from '@/auth';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';


const ProductPage = async () => {

  const session = await auth();

  if(!session?.sessionToken) return;

  const products = await ApiRequests.get("manager/products/", session?.sessionToken);
  

  return (
    <div className="flex flex-col space-y-5 bg-white p-4">
      <h1 className="pb-2 font-semibold">All Products</h1>
      <div>
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  )
}

export default ProductPage