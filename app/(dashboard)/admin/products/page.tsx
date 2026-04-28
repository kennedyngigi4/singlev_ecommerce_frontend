"use client";


import React, { useEffect, useState } from 'react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ProductData } from '@/lib/models/products';
import { ApiRequests } from '@/lib/requests/api_requests';

const ProductsPage = () => {

  const { data:session } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const res = await ApiRequests.get("superadmin/products/products/", session?.accessToken);
      setProducts(res);
    }
    fetchProducts();
  }, [session?.accessToken]);

  return (
    <div className="flex flex-col space-y-3">

      <h1 className="font-semibold text-lg">All Products</h1>

      <div className="bg-white p-4">
        <DataTable columns={columns} data={products} />
      </div>


    </div>
  )
}

export default ProductsPage