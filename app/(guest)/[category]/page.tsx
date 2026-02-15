"use client";

import { ApiRequests } from '@/lib/requests/api_requests';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import RootCategory from './_components/root_category';
import ParentCategory from './_components/parent_category';
import LeafCategory from './_components/leaf_category';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CategoryPage = () => {
  const params = useParams();
  const [categoryProducts, setCategoryProducts] = useState<any>({});
  
  useEffect(() => {
    const fetchData = async() => {
      const res = await ApiRequests.get(`products/${params.category}/`);
      console.log(res);
      setCategoryProducts(res);
    }
    fetchData();
  }, []);

  return (
    <div className="container flex flex-col">
      <nav className="flex gap-2 text-xs pt-3">
        <Link href="/" className="hover:underline flex items-center">
          Home <ChevronRight size={12} className="text-xs" />
        </Link>
        {categoryProducts?.breadcrumbs?.map((cat: any, idx: any) => (
          <span key={cat.id} className="flex items-center gap-2">
            <Link href={`/${cat.slug}`} title={`${cat.name} for sale on Quza Online Shopping`} className="hover:underline">
              {cat.name}
            </Link>
            {idx < categoryProducts.breadcrumbs.length - 1 && <span><ChevronRight size={12} className="text-xs" /></span>}
          </span>
        ))}
      </nav>

      
      <div className="pb-12">
        {categoryProducts.type == "root" && (
          <RootCategory data={categoryProducts} />
        )}

        {categoryProducts.type == "parent" && (
          <ParentCategory data={categoryProducts} />
        )}

        {categoryProducts.type == "leaf" && (
          <LeafCategory data={categoryProducts} />
        )}
      </div>

    </div>
  )
}

export default CategoryPage