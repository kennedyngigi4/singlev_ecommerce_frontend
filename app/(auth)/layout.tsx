"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const AuthLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col space-y-6 container py-5">
        <div>
          <Link href="/" className="text-3xl font-bold text-qprimary">
            <Image src="/quza_logo.png" alt="QUZA KENYA | Kenya's leading online shopping" width={100} height={100} />
          </Link>
        </div>

        <div className="flex mx-auto items-center justify-center">
            {children}
        </div>
        
    </div>
  )
}

export default AuthLayout