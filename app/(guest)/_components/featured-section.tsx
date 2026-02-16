"use client";
import React from 'react'
import ProductCardComponent from './product-card';
import { ProductCard } from '@/lib/models/products';


type FeaturedSection = {
    id: string
    name: string
    bg_title_color: string
    title_color: string
    products: ProductCard[]
}


export interface FeaturedSectionProps {
    items: any;
}

const FeaturedSection = ({ items }: FeaturedSectionProps) => {

    

  return (
    <div>
          {items?.map((featured: FeaturedSection) => (
              <div key={featured.id} className="bg-white rounded shadow flex flex-col mb-5">
                  <div
                      style={{ backgroundColor: featured.bg_title_color, color: featured.title_color }}
                      className="px-4 py-1">
                      {featured.name}
                  </div>

                  <div className="py-2">
                      {featured?.products?.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                              {featured?.products.map((product: ProductCard) => (

                                  <ProductCardComponent key={product.id} product={product} />

                              ))}
                          </div>
                      )}
                  </div>
              </div>
          ))}
    </div>
  )
}

export default FeaturedSection