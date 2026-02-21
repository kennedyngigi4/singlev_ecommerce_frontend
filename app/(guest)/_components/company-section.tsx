"use client";

import React from 'react';
import { Gem, HeadsetIcon, ShieldCheckIcon, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuresList = [
    {
        id: 1,
        icon: ShieldCheckIcon,
        title: "Fast. Safe. Convenient",
        subtitle: "Pay easily via M-Pesa with encrypted and secure transactions every time."
    },
    {
        id: 2,
        icon: Gem,
        title: "Only authentic items",
        subtitle: "Every product is carefully sourced and quality- checked before reaching you."
    },
    {
        id: 3,
        icon: Truck,
        title: "Quick and reliable shipping",
        subtitle: "We dispatch fast and keep you updated every step of the way."
    },
    {
        id: 4,
        icon: HeadsetIcon,
        title: "We’re here for you",
        subtitle: "Responsive support team ready to assist before and after your purchase."
    }
]

const CompanySection = () => {

const features = featuresList;

  return (
    <div className="flex flex-col space-y-5">
        <div className="hidden md:grid md:grid-cols-4 gap-5">
            {features.map((feature) => (
                <div key={feature.id} className="flex flex-col justify-center items-center p-2 bg-white rounded-2xl shadow">
                    <feature.icon size={65} className="text-slate-500 py-4" />

                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-qprimary text-sm text-center">{feature.title}</h2>
                        <p className="text-slate-500 text-center text-xs">{feature.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-6">
            <div className="md:col-span-3">
                <Link href="/" className="text-3xl font-bold text-qprimary">
                    <Image src="/quza_logo.png" alt="QUZA KENYA | Kenya's leading online shopping" width={190} height={150} className="w-24 md:w-38 lg:w-40 h-auto" priority />
                </Link>
            </div>
            <div className="md:col-span-6">
                <div>
                    <h1 className="font-semibold">New to Quza?</h1>
                    <p className="text-sm text-slate-500">Subscribe to our newsletter to get updates on our latest offers!</p>
                </div>
            </div>
            <div className="md:col-span-3">
                <div className="flex space-x-3">
                    
                    <div>
                        <h1 className="font-bold pb-3">DOWNLOAD QUZA FREE APP</h1>
                        <Link href="/" className="text-3xl font-bold text-qprimary">
                            <Image src="/others/google-app.png" alt="QUZA KENYA | Kenya's leading online shopping" width={190} height={150} className="w-24 md:w-38 lg:w-40 h-auto" priority />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanySection