"use client"

import { Category } from "@/lib/models/products"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Category>[] = [
    // {
    //     accessorKey: "thumbnail",
    //     header: "Thumbnail",
    // },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    {
        accessorKey: "",
        header: "Count"
    }
    
]