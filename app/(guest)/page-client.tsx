"use client"

import React from 'react'
import HeroSection from './_components/hero-section'
import FeaturedSection from './_components/featured-section';
import SidebarMenuClient from './_components/sidebar/sidebar-menu-client';




export const metadata = {
  title: "Quza Kenya | Online Shopping for Electronics, Phones, Tablets & Accessories, Laptops & Computers, Home & Office, TVs & Audio, Water Harvesting, Baby products",
  description: 'Buy electronics, fashion & groceries online in Kenya',
}


export interface HomepageClientProps {
  featured: any;
  categories: any;
}

const HomepageClient = ({ featured, categories  }: HomepageClientProps) => {

  console.log(featured);

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