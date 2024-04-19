"use client"

import { ArrowRight, Link } from "lucide-react"
import { Button } from "./ui/button"
import { useConvexAuth } from "convex/react"
import { Spinner } from "./Spinner"
import { SignInButton } from "@clerk/clerk-react"

const Heading = () => {
  const {isAuthenticated,isLoading} =useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <div className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents and Plans.Welcome to <span className="underline">NoteBook</span>
      </div>
      <div className="text-base sm:text-xl md:text-2xl font-medium">
        NoteBook is the connected workspace where <br/> better, faster work happens.
      </div>
      {
        isLoading &&(
          <div className="flex justify-center items-center w-full">
          <Spinner size="lg" />
          </div>
        )
      }


      {
        isAuthenticated && !isLoading &&(
          <Button asChild>
            <Link href="/documents">
        Enter NoteBook
        <ArrowRight className="h-4 w-4 ml-2"/>
        </Link>
      </Button>
        )
      }
      {
        !isAuthenticated && !isLoading &&(
          <SignInButton mode="modal">
            <Button>
              Get NoteBook free
              <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>

          </SignInButton>
        )
      }
      
    </div>
  )
}

export default Heading