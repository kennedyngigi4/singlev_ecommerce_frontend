"use client";

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FacebookIcon, HelpCircleIcon, InstagramIcon, MenuIcon, TwitterIcon, User } from 'lucide-react';
import Link from 'next/link';
import SidebarMenuClient from '../sidebar/sidebar-menu-client';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';


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
                    <div className="text-2xl font-bold text-qprimary">
                        QUZA
                    </div>

                    <div className="border-t pt-4 space-y-3">
                        <div className="flex items-center gap-4 pt-4">
                            <SidebarMenuClient categories={categories} />
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