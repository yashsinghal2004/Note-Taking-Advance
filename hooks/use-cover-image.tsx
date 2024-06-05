import { create } from "zustand";

type CoverImgageStore={
    url?: string;
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
    onReplace:(url:string)=>void;
};

export const useCoverImage=create<CoverImgageStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false,url:undefined}),
    onReplace:(url:string)=>set({isOpen:true, url}),
}));