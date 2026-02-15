"use client";

import React from 'react';
import { useWishStore } from '@/store/wishList';
import { HeartIcon, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WishList = () => {

  const { wish, removeFromWish } = useWishStore();

  

  return (
    <div className="flex flex-col space-y-4 bg-white rounded py-4 px-2">
      <div>
        <h1 className="font-bold">Wishlist</h1>
      </div>

      {wish.length > 0 
        ? (
          <div>
            {wish.map((item) => (
              <div key={item.id} className="flex justify-between space-x-5 py-3 border-b-2 border-gray-50 ">

                <div>
                  <div className="flex space-x-5">
                    <Image src={item.image} alt={`${item.name}`} width={80} height={80} />

                    <div>
                      <p className="line-clamp-2 text-sm">{item.name}</p>
                      <Button size="xs" variant="destructive" className="mt-3 cursor-pointer" onClick={() => removeFromWish(item.id)}><Trash2 /> Remove</Button>
                    </div>
                    
                  </div>
                  
                </div>
                <div className="mx-15">
                  <h1 className="text-qprimary font-bold text-sm flex">KSh {parseInt(item.price).toLocaleString()}</h1>

                  

                </div>
              </div>
            ))}
          </div>
        ) 
        : (
          <div className="flex flex-col items-center justify-center py-16">
            <HeartIcon size={90} className="text-qprimary pb-4" />
            
            <div className="pb-4 flex flex-col text-center w-[50%] pb-8">
              <h1 className="text-qsecondary font-semibold">You haven't saved an item yet</h1>
              <p>Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here.</p>
            </div>
            <Link href="/">
              <Button size="lg" className="cursor-pointer bg-qsecondary rounded-none hover:bg-qprimary">Continue Shopping</Button>
            </Link>
          </div>
        )
      }
      
    </div>
  )
}

export default WishList