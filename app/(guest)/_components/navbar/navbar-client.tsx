"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/store/cartStore';
import { FacebookIcon, HelpCircleIcon, InstagramIcon, MenuIcon, SearchIcon, ShoppingCartIcon, TwitterIcon, User, XIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import MenuDrawerClient from '../menu-drawer/menu-drawer-client';



export interface NavbarClientProps {
  categories: any;
}

const NavbarClient = ({ categories }: NavbarClientProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const { data: session, status } = useSession();

  return (
    <>
      {/* Top Row - Hidden on mobile */}
      <div className="hidden md:block bg-qprimary border-b">
        <div className="container py-1.5">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <p className="text-sm text-white">Welcome to Quza Online Shopping</p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/track-order" className="text-sm text-white hover:text-qsecondary transition-colors">
                Track Your Order
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="#" aria-label="Facebook">
                  <FacebookIcon className="w-4 h-4 text-white hover:text-qsecondary transition-colors" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <TwitterIcon className="w-4 h-4 text-white hover:text-qsecondary transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4 text-white hover:text-qsecondary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">

            {/* Logo - Hidden on medium screens when search is full width */}
            <div className="flex items-center md:hidden lg:flex">
              <Link href="/" className="text-3xl font-bold text-qprimary">
                QUZA
              </Link>
            </div>


            {/* Shopping cart icon */}
            <div className="md:hidden">
              <Link href="/cart">
                <Button variant="ghost" size="sm" className="relative cursor-pointer">
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">Cart</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <MenuDrawerClient categories={categories} />
            </div>

            {/* Search Bar - Full width on large screens */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    className="pl-10 pr-4 w-full border-r-0 rounded-r-none focus:ring-2 focus:ring-qprimary"
                    placeholder="Search products, brands and categories..."
                  />
                </div>
                <Button type="submit" className="rounded-l-none bg-qprimary hover:bg-qprimary/90 cursor-pointer">
                  Search
                </Button>
              </form>
            </div>

            {/* Desktop Actions - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
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


              <Link href="/help">
                <Button variant="ghost" size="sm" className="hidden lg:flex cursor-pointer">
                  <HelpCircleIcon className="w-4 h-4 mr-2" />
                  Help
                </Button>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <HelpCircleIcon className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/cart">
                <Button variant="ghost" size="sm" className="relative cursor-pointer">
                  <ShoppingCartIcon className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">Cart</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar - Visible on mobile */}
          <div className="md:hidden py-3">
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  className="pl-10 pr-4 w-full border-r-0 rounded-r-none"
                  placeholder="Search products..."
                />
              </div>
              <Button type="submit" className="rounded-l-none bg-qprimary hover:bg-qprimary/90">
                Search
              </Button>
            </form>
          </div>


        </div>
      </nav>
    </>
  );
};

export default NavbarClient;