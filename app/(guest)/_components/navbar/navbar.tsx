import React from 'react'
import { ApiRequests } from '@/lib/requests/api_requests';
import NavbarClient from './navbar-client';

const Navbar = async () => {

  const categories = await fetch(
    `${process.env.APIURL}/products/categories/`,
    { cache: "no-store" }
  ).then(res => res.json());
  

  return (
      <NavbarClient categories={categories} />
  )
}

export default Navbar