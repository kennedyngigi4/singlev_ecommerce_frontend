"use client"

import { Button } from "@/components/ui/button";
import { Variant } from "@/lib/models/products"
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link";

export const columns: ColumnDef<Variant>[] = [
    {
        accessorKey: "sku",
        header: "SKU",
    },
    {
        accessorKey: "price",
        header: "Price (KSh)",
    },
    {
        accessorKey: "is_active",
        header: "In-stock",
        cell: ({row}) => {
            const inStock = row?.original?.is_active;

            return(
                <p className={cn("text-red-600", inStock && "text-green-600")}>{inStock ? "Yes" : "No"}</p>
            )
        }
    },
    {
        accessorKey: "color",
        header: "Color",
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        accessorKey: "",
        header: "Manage",
        cell: ({ row }) => {
            const id = row?.original?.id;

            return (
                <Link href="">
                    <Button variant="ghost" size="xs" className="cursor-pointer">Manage</Button>
                </Link>
            )
        }
    },
]