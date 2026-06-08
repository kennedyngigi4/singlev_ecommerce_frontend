"use client"

import CustomButton from '@/components/ui/custom-button'
import { DataTable } from '@/components/ui/custom-datatable'
import Link from 'next/link'
import React from 'react'
import { vendorColumns } from '../../_components/vendor-columns'
import { VendorModel } from '@/lib/models/user'
import { Input } from '@/components/ui/input'


interface VendorsClientPageProps {
    vendors?: VendorModel[];
}

const VendorsClientPage = ({ vendors }: VendorsClientPageProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">

        <div className="flex justify-between items-center gap-4">
            <div>
                <h1 className='font-semibold text-lg'>All Vendors</h1>
                <p className="text-sm text-slate-500">Manage all your vendors, edit, delete or add new ones.</p>
            </div>
            <div>
                <Link href="/manager/vendors/new/">
                    <CustomButton
                        label="Add Vendor"
                        btnType="button"
                    />
                </Link>
            </div>
        </div>


        <div className="mt-5">
            <DataTable 
                data={vendors} 
                columns={vendorColumns} 
                renderSearch={(table) => (
                    <Input
                        placeholder="Search vendor..."
                        value={table.getColumn("business_name")?.getFilterValue() ?? ""}
                        onChange={(e) =>
                            table.getColumn("business_name")?.setFilterValue(e.target.value)
                        }
                        // className="border px-3 py-2 rounded-md"
                    />
                )}    
            />
        </div>
    </div>
  )
}

export default VendorsClientPage