"use client";

import { DiamondIcon, Gem, HeadsetIcon, ShieldCheckIcon, StarsIcon, Truck } from 'lucide-react';
import React from 'react';

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
        icon: StarsIcon,
        title: "Premium quality at fair prices",
        subtitle: "We cut out middlemen to give you the best value for your money."
    },
    {
        id: 5,
        icon: HeadsetIcon,
        title: "We’re here for you",
        subtitle: "Responsive support team ready to assist before and after your purchase."
    }
]

const CompanySection = () => {

const features = featuresList;

  return (
    <div className="flex flex-col space-y-5">
        <div className="hidden md:grid md:grid-cols-5 gap-4">
            {features.map((feature) => (
                <div key={feature.id} className="flex flex-col justify-center items-center p-2 bg-white rounded-2xl shadow">
                    <feature.icon size={40} />

                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-qprimary text-sm text-center">{feature.title}</h2>
                        <p className="text-slate-500 text-center text-xs">{feature.subtitle}</p>
                    </div>
                </div>
            ))}
            


        </div>
    </div>
  )
}

export default CompanySection