"use client"

import React, { useEffect, useState } from 'react'
import HeroSection from './_components/hero-section'
import FeaturedSection from './_components/featured-section';
import SidebarMenuClient from './_components/sidebar/sidebar-menu-client';
import { ApiRequests } from '@/lib/requests/api_requests';




// export const metadata = {
//   title: "Quza Kenya | Online Shopping for Electronics, Phones, Tablets & Accessories, Laptops & Computers, Home & Office, TVs & Audio, Water Harvesting, Baby products",
//   description: 'Buy electronics, fashion & groceries online in Kenya',
// }



const HomepageClient = () => {

  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const feat = await ApiRequests.get("products/home/");
        setFeatured(feat);
        const cat = await ApiRequests.get("products/categories/");
        setCategories(cat);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container py-6">

      <div className="flex gap-6">
        <div className="hidden md:block w-64 shrink-0">
          <SidebarMenuClient categories={categories} />
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <HeroSection />
        </div>
      </div>


      <div className="mt-5">
        <FeaturedSection items={featured} />
      </div>

    </div>
  )
}

export default HomepageClient