"use client";

import * as React from 'react';

const UserLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="px-3">
      {children}
    </div>
  );
}

export default UserLayout;
