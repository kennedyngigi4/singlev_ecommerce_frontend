"use client"

import React from 'react';
import Image from 'next/image';
import { APP } from '@/lib/constants';
import { CheckIcon } from 'lucide-react';

const page = () => {
  return (
    <div className="container py-8 space-y-10">

      

      <div className="relative w-full h-[500px]">
        <Image src="/others/about.png" alt="QUZA ONLINE SHOPPING IN KENYA" fill className="object-contain" />
      </div>
      

      <div className="md:px-40 px-5">

        <h1 className="text-4xl font-bold text-center pb-4">About Us</h1>
        <div className="space-y-5 text-slate-600 text-sm pb-10">
          <p>
            Quza is a trusted online shopping platform in Kenya offering a wide variety of products at affordable prices with convenient delivery options across the country. We make it easy and convenient for customers to shop for quality items from the comfort of their home, office, or anywhere in Kenya.
          </p>
          <p>
            At Quza, you can shop for electronics, phones, fashion, beauty products, home appliances, kitchen items, accessories, baby products, and many more—all in one place. Our platform is designed to provide a smooth shopping experience with secure payments, verified products, and reliable customer support.
          </p>
          <p>
            Whether you are in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, Machakos, or any other town, Quza helps you order what you need and get it delivered quickly and safely.
          </p>
          <p>
            We are committed to making online shopping in Kenya simple, affordable, and dependable.
          </p>
        </div>


        <div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-7 space-y-3">
              <h1 className="font-semibold text-2xl">Why Choose Us</h1>

              {APP.whyChooseUs.map((item: any, index: any) => (
                <div key={index} className="flex items-center">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <CheckIcon size={13} />
                  </div>
                  <div className="">
                    <h1>{item.title}</h1>
                    <p className="text-sm text-slate-600">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-5 md:flex hidden">
              <div className="relative w-full h-full rounded-xl">
                <Image src="/others/about_2.png" alt="QUZA ONLINE SHOPPING IN KENYA" fill className="object-contain rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page