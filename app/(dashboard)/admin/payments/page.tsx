import { auth } from '@/auth'
import { ApiRequests } from '@/lib/requests/api_requests'
import React from 'react'
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const PaymentsPage = async() => {
    const session = await auth();

    const payments = await ApiRequests.get("superadmin/payments/mpesa/", session?.sessionToken);

    return (
        <div className="flex flex-col space-y-4">
            <div>
                <h1 className="font-bold">Mpesa Payments</h1>
            </div>
            <DataTable columns={columns} data={payments} />
        </div>
    );
}

export default PaymentsPage