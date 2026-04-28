"use client"

import React, { useEffect, useState } from 'react'
import HeroSection from './_components/hero-section'
import FeaturedSection from './_components/featured-section';
import SidebarMenuClient from './_components/sidebar/sidebar-menu-client';
import { ApiRequests } from '@/lib/requests/api_requests';
import { Card, CardContent } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';
import { CreditCard, Truck } from 'lucide-react';
import Image from 'next/image';
import CompanySection from './_components/company-section';
import { useSession } from 'next-auth/react';



const HomepageClient = () => {

  const [featured, setFeatured] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const featRes = await ApiRequests.get("products/home/");
        const catRes = await ApiRequests.get("products/categories/");
      
        setFeatured(Array.isArray(featRes) ? featRes : []);
        setCategories(Array.isArray(catRes) ? catRes : []);

      } catch (err) {
        
        setFeatured([]);
        setCategories([]);
      }
    }

    fetchData();
  }, []);

  

  return (
    <div className="pt-6">
      
      <div className="flex container gap-6">
        <div className="hidden md:block w-64 shrink-0">
          <SidebarMenuClient categories={categories} />
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <HeroSection />
        </div>

        <div className="hidden md:block w-64 shrink-0">
          <div className="flex flex-col">
            <Card>
              <CardContent className="flex flex-col space-y-3">
               

                <div className="flex space-x-2 items-start">
                  <div className="bg-qprimary rounded-full p-1.5">
                    <Truck size={21} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">Countrywide Deliveries</p>
                    <p className="text-slate-400 text-xs">We deliver countrywide.</p>
                  </div>
                </div>


                <div className="flex space-x-2 items-start">
                  <div className="bg-qprimary rounded-full p-1.5">
                    <CreditCard size={21} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">Secure Payments</p>
                    <p className="text-slate-400 text-xs">MPesa Payments.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative w-full h-[200px] mt-2">
              <Image src="/others/flashsale.jpg" alt="QUZA ONLINE SHOPPING flash sales" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>


      <div className="mt-5 container">
        <FeaturedSection items={featured} />
      </div>


      <div className="mt-12 py-8 bg-blue-50">
        <div className="container">
          <CompanySection />
        </div>
        
      </div>

    </div>
  )
}

export default HomepageClient