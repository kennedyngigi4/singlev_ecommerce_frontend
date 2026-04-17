import React from 'react'
import { ApiRequests } from '@/lib/requests/api_requests';
import NavbarClient from './navbar-client';

const Navbar = async () => {

  const categories = await ApiRequests.serverGet('products/categories/');

  if (!categories || categories.success === false) {
    return <NavbarClient categories={[]} />; // fallback UI
  }
  

  return (
      <NavbarClient categories={categories} />
  )
}

export default Navbar