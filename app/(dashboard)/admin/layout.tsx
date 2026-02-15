"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode}>) => {

  const {data:session, status} = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if(session?.user.role !== "admin"){
  //     router.push("/");
  //   }
  // }, [session, router]);

  return (
    <div>{children}</div>
  )
}

export default AdminLayout