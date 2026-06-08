import React from 'react'
import CustomButton from '@/components/ui/custom-button'
import Link from 'next/link'
import { ApiRequests } from '@/lib/requests/api_requests'
import { auth } from '@/auth'
import VendorProductsClientPage from './page-client'


const VendorProducts = async() => {
  const session = await auth();

  const products = await ApiRequests.serverGet("vendor/products", session?.accessToken);

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <div className="flex justify-between items-center ">
        <div>
          <h1 className="font-semibold text-xl text-qprimary">Products</h1>

        </div>
        <div>
          <Link href="/vendor/products/new">
            <CustomButton
              label="Add Product"
              btnType='button'
            />
          </Link>
        </div>
      </div>

      <div className="pt-5">
        <VendorProductsClientPage products={products} />
      </div>
    </div>
  )
}

export default VendorProducts