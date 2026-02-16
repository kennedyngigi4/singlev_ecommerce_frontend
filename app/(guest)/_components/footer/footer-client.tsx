"use client";

import { HeadsetIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FooterClient = () => {
  return (
    <div className="container bg-qsecondary py-6 text-white flex flex-col space-y-5">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <h1 className="text-2xl font-bold">QUZA</h1>

          <div className="flex items-center space-x-4 pt-12">
            <HeadsetIcon />

            <div>
              <p>Got Questions? Call us 24/7!</p>
              <h1 className="font-bold text-xl">(+254) 0119 439 544</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold pb-3">Company</h1>
          <ul className="flex flex-col space-y-2">
            <Link href="">
              About Us
            </Link>
            <Link href="">
              Returns and Refunds Policy
            </Link>
            <Link href="">
              FAQs
            </Link>
            <Link href="">
              Contact Us
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pb-3">Useful Links</h1>
          <ul className="flex flex-col space-y-2">
            <Link href="">
              Track Your Order
            </Link>
            <Link href="">
              Returns and Refunds Policy
            </Link>
            <Link href="">
              Shipping Areas
            </Link>
            <Link href="">
              How to Order?
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold pb-3 uppercase">Download QUZA Free App</h1>

          <Link href="" className="">
            <Image src="/others/google-app.png" alt="QUZA" width={150} height={50} />
          </Link>
        </div>
      </div>
      
      <div className="w-full text-center pt-8 pb-5">
        <p>&copy; 2026 <span className="font-extrabold">QUZA MAISHA LTD</span> | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default FooterClient