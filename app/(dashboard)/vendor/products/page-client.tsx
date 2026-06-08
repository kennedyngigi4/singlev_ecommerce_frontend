"use client"

import { DataTable } from '@/components/ui/custom-datatable'
import React from 'react'
import { vendorProductColumns } from '../_components/vendor-product-columns'
import { Input } from '@/components/ui/input'


interface VendorProductsClientPageProps{
    products: any[]
}

const VendorProductsClientPage = ({ products }: VendorProductsClientPageProps) => {
  return (
    <div>
        <DataTable 
            data={products} 
            columns={vendorProductColumns} 
            renderSearch={(table) => (
                <Input
                    placeholder="Search product..."
                    value={table.getColumn("name")?.getFilterValue() ?? ""}
                    onChange={(e) =>
                        table.getColumn("name")?.setFilterValue(e.target.value)
                    }
                    // className="border px-3 py-2 rounded-md"
                />
            )}        
        />
    </div>
  )
}

export default VendorProductsClientPage