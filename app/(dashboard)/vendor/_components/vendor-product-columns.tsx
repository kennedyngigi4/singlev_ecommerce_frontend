"use client"

import CustomButton from "@/components/ui/custom-button"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
    id: string
    name: string
    variant_count: number
    is_active: any
    category: string
}

export const vendorProductColumns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: "Product",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "variant_count",
        header: "Total Variants",
    },
    {
        accessorKey: "is_active",
        header: "Status",
        cell: ({row}) => {

            const isActive = row?.original.is_active;

            return (
                <p>{isActive ? "Active" : "In-active"}</p>
            )
        }
    },
    {
        accessorKey: "",
        header: "Action",
        cell: ({ row }) => {

            const id = row?.original.id;

            return (
                <div>
                    <Link href="">
                        <CustomButton
                            label="Manage"
                            btnType="button"
                        />
                    </Link>
                </div>
            );
        }
    },
]