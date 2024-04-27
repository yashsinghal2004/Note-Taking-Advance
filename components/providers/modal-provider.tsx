"use client"

import { useEffect, useState } from "react"
import { SettingsModel } from "../models/settings-model"

export const ModalProvider=()=>{
    const [isMounted,setIsMounted]=useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted) {
        return null;
    }
    return(
        <>
        <SettingsModel/>
        </>
    )
}