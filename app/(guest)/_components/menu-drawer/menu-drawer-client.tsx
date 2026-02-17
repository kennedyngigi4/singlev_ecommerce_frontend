"use client";

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FacebookIcon, HelpCircleIcon, InstagramIcon, MenuIcon, TwitterIcon, User } from 'lucide-react';
import Link from 'next/link';
import SidebarMenuClient from '../sidebar/sidebar-menu-client';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export interface MenuDrawerClientProps {
    categories: any;
}

const MenuDrawerClient = ({ categories  }: MenuDrawerClientProps) => {
    const {data:session, status } = useSession()
    
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                    aria-label="Toggle menu"
                >
                    <MenuIcon size={24} />
                </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72 p-0">
                <div className="p-6 space-y-4">

                    {/* Logo */}
                    
                    <div>
                        <Link href="/" className="text-2xl font-bold text-qprimary">
                            <Image src="/quza_logo.png" alt="QUZA KENYA | Kenya's leading online shopping" width={150} height={100} className="w-24 md:w-32 lg:w-40 h-auto" priority />
                        </Link>
                    </div>
                    

                    <div className="border-t pt-4 space-y-3">


                        <div className="flex flex-col justify-center items-start ps-1.5 pb-4 space-y-4 border-b-2 border-slate-100">
                            {categories.map((cat: any) => (
                                <div key={cat.id}>
                                    <SheetClose asChild>
                                        <Link href={`/${cat.slug}`} className="flex">
                                            <div className="relative h-[15px] w-[15px]">
                                                <Image src={cat.thumbnail} alt={`QUZA ${cat.name} Online Shopping Nairobi, Kenya`} fill className="object-contain" />
                                            </div>
                                            <span className="ps-2.5 text-sm">{cat.name}</span>
                                        </Link>
                                    </SheetClose>
                                </div>
                            ))}
                            
                        </div>



                        <SheetClose asChild>
                            {status !== "authenticated"
                                ?
                                <>
                                    <Link href="/login">

                                        <Button variant="ghost" size="sm" className="hidden lg:flex cursor-pointer">
                                            <User className="w-4 h-4 mr-2" />
                                            Account
                                        </Button>
                                        <Button variant="ghost" size="sm" className="lg:hidden">
                                            <User className="w-4 h-4" />
                                            Account
                                        </Button>
                                    </Link>
                                </>
                                : <>
                                    <Link href={session?.user?.role === "client" ? "/user" : `/${session?.user?.role}`} className="capitalize">

                                        <Button variant="ghost" size="sm" className="hidden lg:flex cursor-pointer capitalize">
                                            <User className="w-4 h-4 mr-2" />
                                            {session?.user?.name}
                                        </Button>
                                        <Button variant="ghost" size="sm" className="lg:hidden">
                                            <User className="w-4 h-4" />
                                            {session?.user?.name}
                                        </Button>
                                    </Link>
                                </>
                            }
                            
                        </SheetClose>

                        <SheetClose asChild>
                            <Link href="/help" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                                <HelpCircleIcon className="w-5 h-5" />
                                Help
                            </Link>
                        </SheetClose>

                        <SheetClose asChild>
                            <Link href="/track-order" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                                Track Your Order
                            </Link>
                        </SheetClose>

                        <div className="flex items-center gap-4 pt-4">
                            <Link href="#" aria-label="Facebook">
                                <FacebookIcon className="w-5 h-5 text-gray-600" />
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <TwitterIcon className="w-5 h-5 text-gray-600" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <InstagramIcon className="w-5 h-5 text-gray-600" />
                            </Link>
                        </div>

                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MenuDrawerClient