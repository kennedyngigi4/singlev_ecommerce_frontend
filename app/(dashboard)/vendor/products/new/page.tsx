import React from 'react'
import VendorProductForm from '../../_components/vendor-product-form'

const VendorNewProduct = () => {
  return (
    <div className="bg-white p-5 shadow rounded-xl">
        <div className="pb-5">
            <h1 className="font-semibold text-xl text-qprimary">Add Product</h1>
        </div>
        <div>
            <VendorProductForm />
        </div>
    </div>
  )
}

export default VendorNewProduct