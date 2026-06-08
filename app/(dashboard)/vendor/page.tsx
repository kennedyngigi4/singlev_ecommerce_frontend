import { auth } from '@/auth';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { ApiRequests } from '@/lib/requests/api_requests';
import React from 'react'
import VendorClientPage from './page-client';

const VendorPage = async() => {
   const session = await auth();
  
    if (!session?.accessToken) return;
  
    const data = await ApiRequests.serverGet("vendor/dashboard/", session?.accessToken);
    console.log(data)
  
    return (

      <div>
        <VendorClientPage data={data} />
      </div>

      
    );
}

export default VendorPage