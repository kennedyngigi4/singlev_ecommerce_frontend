"use client";

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FacebookIcon, HelpCircleIcon, InstagramIcon, MenuIcon, TwitterIcon, User } from 'lucide-react';
import Link from 'next/link';
import SidebarMenuClient from '../sidebar/sidebar-menu-client';


export interface MenuDrawerClientProps {
    categories: any;
}

const MenuDrawerClient = ({ categories  }: MenuDrawerClientProps) => {
    
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
                    <div className="text-2xl font-bold text-qprimary">
                        QUZA
                    </div>

                    <div className="border-t pt-4 space-y-3">
                        <div className="flex items-center gap-4 pt-4">
                            <SidebarMenuClient categories={categories} />
                        </div>
                        <SheetClose asChild>
                            <Link href="/account" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                                <User className="w-5 h-5" />
                                Account
                            </Link>
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