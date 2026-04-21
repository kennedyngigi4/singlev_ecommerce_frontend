import React from 'react';
import { getUserProfile } from '@/lib/helpers/get-user-profile';
import CheckoutClient from './CheckoutClient';


const Checkout = async () => {

  const user = await getUserProfile();
  
  

  return (
    <CheckoutClient user={user} />
  )
}

export default Checkout