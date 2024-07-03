"use client"
import  useScrollTop  from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils';
import React from 'react'
import { ModeToggle } from './mode-toggle';
import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Spinner } from './Spinner';
import Link from 'next/link';

const Navbar = () => {
  const {isAuthenticated,isLoading}=useConvexAuth();
    const scroll=useScrollTop();


  return (

    
    <div className={cn("z-50 bg-background top-0 fixed items-center w-full p-6 dark:bg-[#1F1F1F]",scroll && 
    "border-b shadow-sm")}>
      <h1 className='absolute font-bold text-2xl pl-2'>
        <Link href="/">NoteBook</Link></h1>
      

      <div className='md:ml-auto md:justify-end justify-between w-full items-center flex
      gap-x-4'>
        
        {
        isLoading &&(
          <Spinner/>
        )
        }
        {
          !isAuthenticated && !isLoading && (
            <>
            <SignInButton mode='modal'>
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size="sm">
                Get Notebook for free
              </Button>
            </SignInButton>
            </>
          )
        }

        {
          isAuthenticated && !isLoading && (
            <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter NoteBook
              </Link>

            </Button>
            <UserButton 
            afterSignOutUrl='/'/>
            </>
          )
        }
        <ModeToggle/>
      </div>
      </div>
  )
}

export default Navbar
