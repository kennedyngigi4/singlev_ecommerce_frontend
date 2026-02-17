"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/lib/models/products"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export const columns: ColumnDef<ProductCard>[] = [
    {
        accessorKey: "thumbnail",
        header: "Image",
        cell: ({ row }) => {
            const thumbnail = row?.original.thumbnail;

            return (
                <Image src={thumbnail} alt="image" width={40} height={40} />
            );
        }
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({row}) => {
            const name = row?.original?.name;

            return(
                <div className="max-w-[150px] line-clamp-2 text-elipsis">
                    <p >{name}</p>
                </div>
                
            );
        }
    },
    {
        accessorKey: "category",
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
        accessorKey: "brand",
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
        header: "Price (KSh)",
        cell: ({row}) => {
            const price = row?.original?.price;

            return(
                <p>{parseFloat(price).toLocaleString()}</p>
            );
        }
    },
    {
        accessorKey: "",
        header: "Action",
        cell: ({row}) => {
            const pid = row?.original?.id;

            return(
                <Link href={`/admin/products/${pid}/`}>
                    <Button size="sm" variant="ghost" className="cursor-pointer">Manage</Button>
                </Link>
            );
        }
    }
]