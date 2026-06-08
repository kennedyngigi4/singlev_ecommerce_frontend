"use client";

import * as React from 'react';

const VendorLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="px-3">
      {children}
    </div>
  );
}

export default VendorLayout;
