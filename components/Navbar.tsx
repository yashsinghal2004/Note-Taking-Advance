"use client"
import  useScrollTop  from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils';
import React from 'react'

const Navbar = () => {
    const scroll=useScrollTop();


  return (
    <div className={cn("z-50 bg-background top-0 fixed items-center w-full p-6 ",scroll && 
    "border-b shadow-sm")}>
      Navbar
    </div>
  )
}

export default Navbar
