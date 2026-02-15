"use client"

import { Button } from "@/components/ui/button";
import { Order } from "@/lib/models/orders"
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";


export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "order_id",
        header: "Order ID",
    },
    {
        accessorKey: "total_amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Amount (KSh)
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const formattedPrice = parseFloat(row?.original?.total_amount).toLocaleString();

            return(
                <p>{formattedPrice}</p>
            )
        }
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Items
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "payment_status",
        header: "Payment",
        cell: ({ row }) => {
            const paymentStatus = row?.original?.payment_status;

            return (
                <p className={cn("text-red-600 capitalize", paymentStatus === "paid" && "text-green-600")}>{paymentStatus}</p>
            );
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row?.original?.status;

            return (
                <p className={cn("text-red-600 capitalize", status === "delivered" && "text-green-600")}>{status}</p>
            );
        }
    },
    {
        accessorKey: "",
        header: "Details",
        cell: ({row}) => {
            return(
                <Button variant="ghost" size="sm" className="cursor-pointer">Details</Button>
            );  
        }
    },
]