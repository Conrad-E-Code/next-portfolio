"use client"
import {useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Colors from '../constants/colors'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Context } from '@/context/Context'

const NavBar = () => {
    const router = useRouter()
    const {nav, setNav, clr, setClr, textClr, setTextClr} = useContext(Context)
    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 15){
                setClr("transparent")
                setTextClr("textColorDark")
            }
            else {
                setClr("secondaryColor")
                setTextClr("textColorLight")
            }
        }
        window.addEventListener("scroll", changeColor)
    },[])
    console.log(textClr, typeof textClr)
  return (
    <div className={` bg-${clr} z-20 fixed top-0 left-0 w-full ease-in duration-300`}>
        <div style={{color: Colors[textClr]}} className={`max-w-[1240px] m-auto flex justify-between items-center`}>
        <h1 onClick={()=> router.push("/")} className={`cursor-pointer font-bold `}>Conrad Etherington</h1>
            <ul className='hidden sm:flex mx-5 gap-3 '>
                <li className='navbar-li'>
                <Link className='cursor-pointer' href='/about-me'> About Me</Link>
                </li>
                <li className='navbar-li'>
                <Link className='cursor-pointer' href='/projects'> Skills</Link>
                </li>
                <li className='navbar-li'>
                    <Link href="#projects">Projects</Link>
                </li>
            </ul>
            {/* Mobile Button */}
            <div className='fixed top-1 right-4 sm:hidden z-40 ease-in duration-300'>
                {!nav ? <AiOutlineMenu onClick={handleNav} size={20}/> : <AiOutlineClose onClick={handleNav} size={20}/>}
            </div>
            {/* Mobile Menu */}
{nav ?             <div className={` text-${textClr} sm:hidden absolute top-0 left-0 right-0
             bottom-0 flex justify-center items-center w-full
              h-screen bg-secondaryColor ease-in duration-300`} >
            <ul className='flex flex-col mx-5 gap-3'>
                <li className=' text-4xl hover:text-textColorDark'>
                <Link onClick={handleNav} className='cursor-pointer' href='/about-me'> About Me</Link>
                </li>
                <li className=' text-4xl hover:text-textColorDark'>
                <Link className='cursor-pointer' href='/projects'> Projects</Link>
                </li>
                <li className={` text-4xl hover:text-${Colors.textColorDark}`}>
                    <Link href="#skills">Skills</Link>
                </li>
            </ul>
            </div> : null}

            
        </div>
    </div>
  )
}

export default NavBar