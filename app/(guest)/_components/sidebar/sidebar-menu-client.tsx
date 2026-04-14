"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface SidebarMenuClientProps {
    categories: any[];
}

export default function SidebarMenuClient({ categories }: SidebarMenuClientProps) {
    
    const [active, setActive] = useState<any>(null);
    const [open, setOpen] = useState(false);


    return (
        <div
            className="relative inline-block"
            onMouseLeave={() => {
                setOpen(false);
                setActive(null);
            }}
        >
            {/* LEFT SIDEBAR */}
            <aside className="w-64 bg-white border-0 rounded-xl md:shadow-sm">
                {categories?.map((cat: any) => (
                    <div
                        key={cat.id}
                        onMouseEnter={() => {
                            setActive(cat);
                            setOpen(true);
                        }}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                    >
                        <Link href={`/${cat.slug}`} className="flex">
                            <div className="relative h-[20px] w-[20px]">
                                <Image src={cat.thumbnail} alt={`QUZA ${cat.name} Online Shopping Nairobi, Kenya`} fill className="object-contain" />
                            </div>
                            <span className="ps-2.5">{cat.name}</span>
                        </Link>
                        
                    </div>
                ))}
            </aside>

            {/* RIGHT PANEL (OVERLAY) */}
            {open && active && (
                <section
                    className="
                        absolute top-0 left-64
                        w-[850px]
                        bg-white
                        shadow-lg
                        z-50
                        px-6
                        py-3
                        grid grid-cols-3 gap-6
                        max-h-[80vh] overflow-y-auto
                        rounded
                    "
                >
                    {active.children?.map((sub: any) => (
                        <div key={sub.id}>
                            <h4 className="font-bold mb-3">
                                <Link
                                    href={`/${sub.slug}/`}
                                    className="hover:text-qprimary text-sm"
                                >
                                    {sub.name}
                                </Link>
                            </h4>

                            <ul className="space-y-2 text-sm">
                                {sub.children?.map((child: any) => (
                                    <li key={child.id}>
                                        <Link
                                            href={`/${child.slug}/`}
                                            className="text-gray-600 hover:text-qprimary text-sm"
                                        >
                                            {child.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}
