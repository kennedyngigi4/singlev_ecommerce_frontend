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

        <div className="bg-white p-5 rounded-lg">
            <h1 className="text-xl font-bold">Quza Kenya: Your New Favorite Way to Shop in Kenya</h1>

            <div className="text-sm space-y-3">
                <p className="text-slate-500 pt-3">
                    Welcome to the future of retail! Quza isn't just another website; it’s your ultimate digital shopping 
                    haven. We’ve reimagined the shopping journey to make it faster, sleeker, and more rewarding.
                </p>
                <p className="text-slate-500">
                  Whether you’re hunting for cutting-edge tech, refreshing your wardrobe with the latest trends, or upgrading 
                  your home essentials, Quza brings the best of the world to your fingertips. From Nairobi to Mombasa, Nakuru to Kisumu, 
                  skip the mall crowds and experience the pure ease of buying online with a platform built for you.
                </p>

                
                <div className="space-y-2">
                    <h1 className="font-semibold">Premium Brands. Unbeatable Prices.</h1>
                    <p className="text-slate-500">
                        We believe you shouldn't have to choose between quality and affordability. At Quza, our mission is simple: Maximum value for every shilling. <br />
                        Explore a massive world of categories:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-500 ps-5">
                        <li>
                            Mobile & Tech: Get your hands on the latest iPhone, Samsung Galaxy, Xiaomi Redmi, and Tecno Spark series.
                        </li>
                        <li>
                            Computing & Entertainment: High-performance laptops, crystal-clear Smart TVs, and immersive audio.
                        </li>
                        <li>
                            Lifestyle & Fashion: Trend-setting styles for men and women, plus premium health and beauty finds.
                        </li>
                    </ul>
                </div>


                <div className="space-y-2">
                    <h1 className="font-semibold">Serious Savings & Exclusive Drops</h1>
                    <p className="text-slate-500">
                        Get ready to be obsessed with our deals. Quza is your gateway to exclusive promotions and massive discounts that keep your budget intact.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-500 ps-5">
                        <li>
                            Flash Sales: Lightning-fast deals on high-demand items.
                        </li>
                        <li>
                            Stock Clearance: Premium gear at "must-go" prices.
                        </li>
                        <li>
                            Signature Events: Mark your calendars for Quza Tech Week, our massive Anniversary Sale, and the legendary Black Friday extravaganza.
                        </li>
                    </ul>
                    <p className="text-slate-500">From sneakers and watches to air conditioners and earbuds, if you want it, we’ve got it for less.</p>
                </div>

                <div className="space-y-2">
                    <h1 className="font-semibold">The Quza Service Standard</h1>
                    <p className="text-slate-500">
                        We’re going the extra mile (literally) to make sure your experience is seamless:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-500 ps-5">
                        <li>
                            Official Stores: Shop with 100% confidence in our brand-verified stores—Authenticity Guaranteed.
                        </li>
                        <li>
                            Global Selection: Explore Quza Global for handpicked international products shipped directly to Kenya.
                        </li>
                        
                    </ul>
                    
                </div>


                <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Frequently Asked Questions</h1>
                    <ol className="list-decimal list-inside space-y-2 text-slate-500 ps-5">
                        <li className=''>
                            <span className="font-semibold text-black">How do I place an order?</span>
                            <p className="ps-4">It’s easy! Browse, tap "Add to Cart," and head to checkout. Our intuitive interface will guide you through the rest in seconds.</p>
                            
                        </li>
                        <li className=''>
                            <span className="font-semibold text-black">How can I pay?</span>
                            <p className="ps-4">We keep it flexible. Pay via Mobile Money (M-Pesa), Credit/Debit cards, or choose Cash on Delivery for ultimate peace of mind.</p>

                        </li>
                        <li className=''>
                            <span className="font-semibold text-black">When will my order arrive?</span>
                            <p className="ps-4">We move fast! By partnering with Kenya’s leading logistics experts, we ensure your order is handled with care. Delivery times depend on your location.</p>

                        </li>
                        <li className=''>
                            <span className="font-semibold text-black">What if I change my mind?</span>
                            <p className="ps-4">No stress. Quza offers a hassle-free return policy. If your purchase isn't quite right, we’ll help you sort out a return or refund quickly.</p>

                        </li>
                        <li className=''>
                            <span className="font-semibold text-black">Is my data secure?</span>
                            <p className="ps-4">Your privacy is our priority. Quza uses industry-leading encryption and security protocols to ensure your personal information stays private and protected.</p>

                        </li>
                    </ol>

                </div>
            </div>

        </div>



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