"use client";

import React from 'react';
import { Button } from './button';

interface CustomButtonProps {
    label: string;
    loading: boolean;
    loadingText: string;
}

const CustomButton = ({ label, loading, loadingText }: CustomButtonProps) => {
  return (
    
    <Button type="submit" disabled={loading} className="cursor-pointer bg-qprimary rounded-2xl ">
      {loading 
        ? <>{loadingText}</> 
        : <>{label}</>
      }
    </Button>
    
  )
}

export default CustomButton