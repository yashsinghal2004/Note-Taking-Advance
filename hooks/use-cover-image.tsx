import { create } from "zustand";

type CoverImgageStore={
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
};

export const useCoverImage=create<CoverImgageStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}));