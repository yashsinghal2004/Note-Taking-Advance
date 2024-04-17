"use client"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50'>
      <div className="font-bold">NoteBook</div>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center
      gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
            Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
            Terms & Conditions
        </Button>
      </div>
    </div>

  )
}

export default Footer
