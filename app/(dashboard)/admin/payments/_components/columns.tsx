"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: string
    transaction_code: string
    phone_number: string
    created_at: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const formattedDate = new Date(row?.original?.created_at).toLocaleDateString("en-us", { year: "numeric", month: "2-digit", day: "numeric" })
            return(
                <p>{formattedDate}</p>
            );
        }
    },
    {
        accessorKey: "transaction_code",
        header: "Transaction Code",
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const amount = parseInt(row?.original.amount).toLocaleString();
            return (
                <p>{amount}</p>
            );
        }
    },
    {
        accessorKey: "phone_number",
        header: "Mobile",
    },
    
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            const status = row?.original?.status;

            return (
                <p className={cn("text-red-600 capitalize", status === "paid" && "text-green-600" )}>{status}</p>
            );
        }
    },
]