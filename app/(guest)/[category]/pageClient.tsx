"use client";

import React from 'react'
import RootCategory from './_components/root_category';
import ParentCategory from './_components/parent_category';
import LeafCategory from './_components/leaf_category';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';


export interface PageClientProps {
    data: any;
}

const CategoryPageClient = ({ data }: PageClientProps) => {
  return (
      <div className="container flex flex-col">
          <nav className="flex gap-2 text-xs pt-3">
              <Link href="/" className="hover:underline flex items-center">
                  Home <ChevronRight size={12} className="text-xs" />
              </Link>
              {data?.breadcrumbs?.map((cat: any, idx: any) => (
                  <span key={cat.id} className="flex items-center gap-2">
                      <Link href={`/${cat.slug}`} title={`${cat.name} for sale on Quza Online Shopping`} className="hover:underline">
                          {cat.name}
                      </Link>
                      {idx < data.breadcrumbs.length - 1 && <span><ChevronRight size={12} className="text-xs" /></span>}
                  </span>
              ))}
          </nav>


          <div className="pb-12">
              {data.type == "root" && (
                  <RootCategory data={data} />
              )}

              {data.type == "parent" && (
                  <ParentCategory data={data} />
              )}

              {data.type == "leaf" && (
                  <LeafCategory data={data} />
              )}
          </div>

      </div>
  )
}

export default CategoryPageClient