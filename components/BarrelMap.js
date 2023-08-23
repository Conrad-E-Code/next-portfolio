"use client";
import React from 'react'
import { useState, useEffect } from 'react'

const BarrelMap = (props) => {
    const [Client, setClient] = useState()
    useEffect(()=>{
        (async () => {
            if (typeof global.window !== "undefined") {
                const newClient = (await import('./MyMap')).default
                setClient(() => newClient);
            }
        })();
    },[])
    if (typeof global.window === "undefined" || !Client) {
        return null;
    }
    
    return Client ? <Client {...props} /> : null;
}

export default BarrelMap