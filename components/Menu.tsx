"use client"

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreHorizontal, Trash } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface MenuProps{
    documentId:Id<"documents">
}

export const Menu = ({
    documentId,
}:MenuProps) => {
    const router=useRouter();
    const {user}=useUser();

    const archive=useMutation(api.documents.archive);

    const onArchive=()=>{
        const promise=archive({id:documentId});

        toast.promise(promise,{
            loading:"Archiving note...",
            success:"Note Archived!",
            error:"Failed to archive note."
        });

        router.push("/documents");
    }
    return ( 
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild >
                    <Button size="sm" variant="ghost">
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                className="w-60"
                align="end"
                alignOffset={8}
                forceMount>
                    <DropdownMenuItem>
                        <Trash className="h-4 w-4 mr-2"/>
                        Delete
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <div className="text-xs text-muted-foreground p-2">
                        Last edited by: {user?.fullName}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
     );
}

Menu.Skeleton=function MenuSkeleton(){
    return(
        <Skeleton className="h-10 w-10"/>
    )
}
 