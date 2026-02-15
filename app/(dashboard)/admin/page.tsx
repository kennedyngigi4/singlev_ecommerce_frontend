
import React from 'react'
import { auth } from '@/auth';
import { ApiRequests } from '@/lib/requests/api_requests';
import PageClient from './pageClient';


const AdminHomePage = async () => {
  const session = await auth();

  const stats = await ApiRequests.get("superadmin/orders/stats/", session?.sessionToken);
  console.log(stats);

  return (
    <PageClient stats={stats} />
  )
}

export default AdminHomePage