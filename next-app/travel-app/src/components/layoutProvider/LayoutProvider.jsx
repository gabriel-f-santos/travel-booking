"use client";
import { usePathname } from "next/navigation";
import React from 'react'
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';

export default function LayoutProvider({children}) {
    const pathname = usePathname();
  return (
    <>
    {pathname !== "/login" && pathname !== "/signup" && <NavBar />}
    {children}
    {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  )
}
