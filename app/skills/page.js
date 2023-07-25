"use client";
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '@/context/Context'
import Colors from '@/constants/colors';
const page = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
        setTextClr("textColorDark")
    },[])
    const {nav, setNav, clr, setClr, textClr, setTextClr, setTextIsDark, textIsDark} = useContext(Context)
  return (

    <div className="">
        <div className="flex flex-col pt-20 bg-green-50 h-screen" >
            <h1 style={{
                color: Colors[textClr]
            }} className={` bg-black/50 text-4xl ease-in duration-300`}>My skills</h1>
            <div className="flex-1 flex-col bg-red-200">
                <div className="flex flex-col bg-blue-200">
                    howdy
                    <div className="flex flex-col bg-yellow-200">
                        howdy
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default page