"use client"

import { Button } from "@/components/ui/button";
import { User } from "@/lib/models/user"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "fullname",
        header: "Fullname",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "",
        header: "Details",
        cell: ({row}) => {
            return(
                <Button variant="ghost" size="sm">Details</Button>
            );
        }
    },
]