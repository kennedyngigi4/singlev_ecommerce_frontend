"use client"

import CustomButton from "@/components/ui/custom-button"
import { VendorModel } from "@/lib/models/user"
import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"



export const vendorColumns: ColumnDef<VendorModel>[] = [
    {
        accessorKey: "business_name",
        header: "Business Name",
    },
    {
        accessorKey: "business_phone",
        header: "Phone",
    },
    {
        accessorKey: "business_location",
        header: "Location",
    },
    
    {
        accessorKey: "business_status",
        header: "Status",
        cell: ({row}) => {
            const status = row?.original.business_status;

            return(
                <div className="">
                    <p className={cn("inline-block text-xs capitalize px-2.5 py-1 rounded-full", status === "approved" ? "bg-green-100 text-green-600 border-2 border-green-300" : "bg-red-100 text-red-600 border-2 border-red-300")}>{status}</p>
                </div>
            );
        }
    },
    {
        accessorKey: "",
        header: "Manage",
        cell: ({row}) => {
            const id = row?.original.id;

            return (
                <div>
                    <Link href={`/manager/vendors/edit/${id}/`}>
                        <CustomButton 
                            label="Manage"
                            btnType="button"
                            
                        />
                    </Link>
                </div>
            )
        }
    },
]