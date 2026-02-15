import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCartStore } from '@/store/cartStore';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getUserProfile } from '@/lib/helpers/get-user-profile';
import CheckoutClient from './CheckoutClient';


const Checkout = async () => {

  const user = await getUserProfile();
  
  

  return (
    <CheckoutClient user={user} />
  )
}

export default Checkout