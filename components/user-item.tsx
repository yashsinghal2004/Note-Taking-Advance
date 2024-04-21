"use client"

import { useUser } from "@clerk/clerk-react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";

const UserItem = () => {
    const {user}=useUser();

  return (
    <>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div role="button" className="flex items-center text-sm 
            p-3 w-full hover:bg-primary/5">
                <div className="gap-x-2 flex items-center max-w-[150px]">
                    <Avatar className="h-5 w-5">
                        <AvatarImage src={user?.imageUrl}/>
                    </Avatar>
                    <span className="text-start font-medium line-clamp-1">
                        {user?.fullName}&apos;s NoteBook
                    </span>
                    
                </div>
            </div>
        </DropdownMenuTrigger>
    </DropdownMenu>
    </>
  )
}

export default UserItem;
