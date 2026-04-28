
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit2Icon, PlusIcon } from 'lucide-react';
import { getUserProfile } from "@/lib/helpers/get-user-profile";
import Link from 'next/link';



const ClientHomePage = async () => {
  
  const user = await getUserProfile();

  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Card>
            <CardHeader className="font-semibold">
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="font-semibold text-slate-500">{user?.fullname}</h1>
              <p className="text-slate-500">{user?.email}</p>
            </CardContent>
          </Card>
        </div>


        <div>
          <Card>
            <CardHeader className="font-semibold">
              <div className="flex justify-between">
                <CardTitle>Address Book</CardTitle>

                <Link href="">
                  <Button className="cursor-pointer" variant="ghost" size="sm"><Edit2Icon /></Button>
                </Link>
              </div>
              
            </CardHeader>
            <CardContent>

              { user?.locations?.length > 0 
                ? ( 
                  <>
                    <p>Locations ......</p>
                  </> 
                ) 
                : ( 
                  <>
                    <Button className="cursor-pointer" variant="outline" size="sm"><PlusIcon /> Add Address</Button>
                  </> 
                )
              }

            </CardContent>
          </Card>
        </div>

      </div>

      
      <div>
        <Card>
          <CardHeader className="font-semibold">
            <CardTitle>Newsletter</CardTitle>
          </CardHeader>
          <CardContent>

          </CardContent>
        </Card>
      </div>
      
    </div>
  )
}

export default ClientHomePage


