"use client"

import { Button } from "@/components/ui/button"
import { Order } from "@/lib/models/orders"
import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "order_id",
        header: "Order ID",
    },
    {
        accessorKey: "quantity",
        header: "Items",
    },
    {
        accessorKey: "total_amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "payment_status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Payments
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const status = row?.original.payment_status;

            return(
                <p className={cn("text-red-600 capitalize", status === "paid" && "text-green-600")}>{status}</p>
            );
        }
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const status = row?.original.status;

            return (
                <p className={cn("text-red-600 capitalize", status !== "pending" && "text-green-600")}>{status}</p>
            );
        }
    },
    {
        accessorKey: "",
        header: "Manage",
        cell: ({row}) => {
            const id = row?.original.id;

            return(
                <Link href={`/manager/orders/${id}/`}>
                    <Button className="cursor-pointer" variant="ghost" size="xs">Manage</Button>
                </Link>
            )
        }
    },
]