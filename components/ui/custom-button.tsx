"use client";

import React from 'react';
import { Button } from './button';

interface CustomButtonProps {
    label: string;
    loading?: boolean;
    loadingText?: string;
    btnType: "submit" | "button" | "reset"
}

const CustomButton = ({ label, loading, loadingText, btnType }: CustomButtonProps) => {
  return (
    
    <Button 
      type={btnType} 
      disabled={loading} 
      className="cursor-pointer bg-qprimary rounded-2xl "
    >
      {loading 
        ? <div className="flex items-center space-x-4">
            <span>{loadingText}</span>
          </div> 
        : <>{label}</>
      }
    </Button>
    
  )
}

export default CustomButton