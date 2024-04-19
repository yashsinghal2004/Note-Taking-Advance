"use client"
import  useScrollTop  from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils';
import React from 'react'
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
    const scroll=useScrollTop();


  return (
    
    <div className={cn("z-50 bg-background top-0 fixed items-center w-full p-6 dark:bg-[#1F1F1F]",scroll && 
    "border-b shadow-sm")}>
      

      <div className='md:ml-auto md:justify-end justify-between w-full items-center flex
      gap-x-4'>
        
        Login
        <ModeToggle/>
      </div>
      </div>
  )
}

export default Navbar
