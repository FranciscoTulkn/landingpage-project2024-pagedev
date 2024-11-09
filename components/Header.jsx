'use client';

import React, { useState, useEffect } from "react";

// Import components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
      const scrollYpos = window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // Remove event scroll
    return () => window.removeEventListener('scroll', scrollYpos);
  });
  
  return (
    <header 
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
        } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Navigation  Nav */}
            <Nav 
              containerStyles="hidden xl:flex gap-x-8 items-center"
              LinkStyles='relative hover:text-primary transition-all'
              underLineStyyles='absolute top-full left-0 h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* Navigation Nav Mobile */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
