"use client"

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
                <DropdownMenuTrigger>
                    <Button>
                        <More
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </div>
     );
}
 