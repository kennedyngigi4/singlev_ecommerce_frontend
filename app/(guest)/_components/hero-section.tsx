"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[330px] overflow-hidden rounded-md">
        <Image 
            src="/slides/1.gif"
            alt="QUZA ONLINE SHOPPING in Nairobi, Kenya"
            fill
            unoptimized
            priority
            className="object-cover"
        />
    </div>
  )
}

export default HeroSection