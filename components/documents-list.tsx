"use client"

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Item } from "./Item";
import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";

interface DocumentsListProps{
    parentDocumentId?:Id<"documents">;
    level?:number;
    data?:Doc<"documents">;
}

export const DocumentsList = (
    {
        parentDocumentId,
        level=0,
    }:DocumentsListProps,
) => {
    const params=useParams();
    const router=useRouter();
    const [expanded,setExpanded]=useState<Record<string,boolean>>({});

    const documents=useQuery(api.documents.getSidebar,{
        parentDocument:parentDocumentId,
    });

    const onExpand=(documentId:string)=>{
        setExpanded((prevExpanded)=>{
            return {
               ...prevExpanded,
                [documentId]:!prevExpanded[documentId]
            }
        })
    };

        const onRedirect=(documentId:string)=>{
            router.push(`/document/${documentId}`);
        }

        if(documents===undefined){
            return(
                <>
                <Item.Skeleton level={level}/>
                {
                    level===0 && (
                        <> 
                        <Item.Skeleton level={level}/>
                        <Item.Skeleton level={level}/>
                        </>
                    )

                }
                </>
            )
        }


    return ( 
        <>
        <p style={{paddingLeft:level? `${(level*12)+25}px`: undefined}}
        className={cn("hidden text-sm font-medium text-muted-foreground/80",
        expanded && "last:block",
        level===0 && "hidden")}>
        No Pages inside
        </p>
        {
            documents?.map((document)=>(
                <div >
                    <Item
                    id={document._id}
                    onClick={()=>onRedirect(document._id)}
                    label={document.title}
                    icon={FileIcon}
                    documentIcon={document.icon}
                    active={params.documentId===document._id}
                    level={level}
                    onExpand={()=>onExpand(document._id)}
                    expanded={expanded[document._id]}/>

                    {
                        expanded[document._id] && (
                            <DocumentsList
                            parentDocumentId={document._id}
                            level={level+1}/>
                        )
                    }

                </div>
            ))
        }
        </>
     );
}
