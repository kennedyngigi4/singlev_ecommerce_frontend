"use client";

import Link from 'next/link';
import React from 'react';

const AuthLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col space-y-6 container py-5">
        <div>
          <Link href="/" className="text-3xl font-bold text-qprimary">QUZA</Link>
        </div>

        <div className="flex mx-auto items-center justify-center">
            {children}
        </div>
        
    </div>
  )
}

export default AuthLayout