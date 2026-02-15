import React from 'react'
import SidebarMenu from './_components/sidebar-menu'
import HeroSection from './_components/hero-section'
import { ApiRequests } from '@/lib/requests/api_requests';
import ProductCardComponent from './_components/product-card';
import { ProductCard } from '@/lib/models/products';

type FeaturedSection = {
  id: string
  name: string
  bg_title_color: string
  title_color: string
  products: ProductCard[]
}


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
        {Array.isArray(featuredProducts) ? featuredProducts?.map((featured: FeaturedSection) => (
          <div key={featured.id} className="bg-white rounded shadow flex flex-col mb-5">
            <div
              style={{ backgroundColor: featured.bg_title_color, color: featured.title_color }}
              className="px-4 py-1">
              {featured.name}
            </div>

            <div className="py-2">
              {featured?.products?.length > 0 && (
                <div className="grid md:grid-cols-5 gap-5">
                  {featured?.products.map((product: ProductCard) => (
                    
                    <ProductCardComponent key={product.id} product={product} />
                    
                  ))}
                </div>
              )}
            </div>
          </div>
        )) : null
        }
      </div>

    </div>
  )
}

export default Homepage