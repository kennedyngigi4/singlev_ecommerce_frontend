"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/lib/models/products"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import Image from "next/image"

export const columns: ColumnDef<ProductCard>[] = [
    {
        accessorKey: "thumbnail",
        header: "Thumbnail",
        cell: ({row}) => {
            const thumbnail = row?.original?.thumbnail;

            return (
                <Image src={thumbnail} alt={``} width={60} height={60} />
            )
        }
    },
    {
        accessorKey: "product.name",
        header: "Product",
    },
    {
        accessorKey: "product.category",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Category
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "product.brand",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Brand
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price (KSh)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const formattedPrice = parseFloat(row?.original?.price).toLocaleString();

            return(
                <p>{formattedPrice}</p>
            );
        }
    },
    {
        accessorKey: "",
        header: "Manage",
        cell: ({ row }) => {
            const id = row?.original?.id;

            return (
                <Button className="cursor-pointer" variant="ghost" size="sm">Manage</Button>
            );
        }
    },
]