import React from 'react'
import SidebarMenu from './_components/sidebar-menu'
import HeroSection from './_components/hero-section'
import { ApiRequests } from '@/lib/requests/api_requests';

import { ProductCard } from '@/lib/models/products';
import FeaturedSection from './_components/featured-section';




export const metadata = {
  title: "Quza Kenya | Online Shopping for Electronics, Phones, Tablets & Accessories, Laptops & Computers, Home & Office, TVs & Audio, Water Harvesting, Baby products",
  description: 'Buy electronics, fashion & groceries online in Kenya',
}


const Homepage = async () => {

  const featuredProducts = await ApiRequests.get("products/home/");

  return (
    <div className="container py-6">

      <div className="flex gap-6">
        <div className="w-64 shrink-0">
          <SidebarMenu />
        </div>

        <div className="flex-1 overflow-hidden">
          <HeroSection />
        </div>
      </div>


      <div className="mt-5">
        <FeaturedSection items={featuredProducts} />
      </div>

    </div>
  )
}

export default Homepage