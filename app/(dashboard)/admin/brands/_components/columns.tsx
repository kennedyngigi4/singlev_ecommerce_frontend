"use client"

import { Brand } from "@/lib/models/products"
import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, Trash2 } from "lucide-react";
import Link from "next/link";

export const brandColumns: ColumnDef<Brand>[] = [
    {
        accessorKey: "",
        header: "Logo",
    },
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
        header: "Action",
        cell: ({row}) => {
            return(
                <div className="flex space-x-6">
                    <Link href="" className="text-xs text-green-600 flex space-x-9 justify-center items-center"><Edit2Icon size={12} /> Edit</Link>
                    <Link href="" className="text-xs text-red-600 flex space-x-9 justify-center items-center"><Trash2 size={12} /> Delete</Link>
                </div>
            );
        }
    }
]