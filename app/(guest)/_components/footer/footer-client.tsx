"use client";

import { FacebookIcon, HeadsetIcon } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FooterClient = () => {
  return (
    <div className="bg-qsecondary">
      <div className="container py-6 text-white flex flex-col space-y-5 relative">

        <div className="fixed -bottom-2 right-2 z-50 shadow-2xl">
          <a href="https://wa.me/254119441639" target="_blank">
            <div className="bg-green-500 p-1.5 rounded-full flex items-center justify-center text-sm">
              <FaWhatsapp size={34} />
            </div>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            {/* <div>
              <Link href="/" className="text-3xl font-bold text-qprimary">
                <Image src="/quza_footer_logo.png" alt="QUZA KENYA | Kenya's leading online shopping" width={190} height={150} className="w-24 md:w-38 lg:w-40 h-auto" priority />
              </Link>
            </div> */}

            <div className="flex items-center space-x-4 pt-12">
              <HeadsetIcon />

              <div>
                <p>Got Questions? Call us 24/7!</p>
                <h1 className="font-bold text-xl">(+254) 0119 439 544 /</h1>
                <h1 className="font-bold text-xl">(+254) 0119 441 639</h1>
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
            <h1 className="font-bold pb-3 uppercase">Business</h1>

            <ul className="flex flex-col space-y-2">
              <Link href="">
                Want to sell on Quza?
              </Link>
              <Link href="">
                Advertise on Quza
              </Link>
              <Link href="">
                Flash Sales
              </Link>
              <Link href="">
                Quza business help centre
              </Link>
            </ul>
          </div>
        </div>
        
        <div className="w-full flex justify-between text-center pt-8 pb-8">
          <p>&copy; 2026 <span className="font-extrabold">QUZA MAISHA LTD</span> | All Rights Reserved</p>
          <Image src="/others/mpesa.png" alt="" width={60} height={60} />
        </div>
      </div>
    </div>
  )
}

export default FooterClient