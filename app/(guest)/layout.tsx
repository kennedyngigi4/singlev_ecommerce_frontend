"use client";

import React from 'react';
import Navbar from './_components/navbar';
import Footer from './_components/footer';


const GuestLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default GuestLayout