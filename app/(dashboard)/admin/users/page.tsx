import { auth } from '@/auth';
import { ApiRequests } from '@/lib/requests/api_requests';
import React from 'react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const UsersPage = async() => {

  const session = await auth();

  const users = await ApiRequests.get("superadmin/users/all/", session?.sessionToken);
 

  return (
    <div>
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export default UsersPage