"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Colors from '../constants/colors'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [clr, setClr] = useState(Colors.secondaryColor)
    const [textClr, setTextClr] = useState(Colors.textColorLight)
    const router = useRouter()
    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 15){
                setClr("transparent")
                setTextClr(Colors.textColorDark)
            }
            else {
                setClr(Colors.secondaryColor)
                setTextClr(Colors.textColorLight)
            }
        }
        window.addEventListener("scroll", changeColor)
    },[])

  return (
    <div style={{backgroundColor: `${clr}`}} className='z-20 fixed top-0 left-0 w-full ease-in duration-300'>
        <div style={{color: textClr}}className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <h1 onClick={()=> router.push("/")} className='cursor-pointer font-bold '>Conrad Etherington</h1>
            <ul className='hidden sm:flex mx-5 gap-3 '>
                <li className='navbar-li'>
                <Link className='cursor-pointer' href='/about-me'> About Me</Link>
                </li>
                <li className='navbar-li'>
                <Link className='cursor-pointer' href='/projects'> Projects</Link>
                </li>
                <li className='navbar-li'>
                    <Link href="#skills">Skills</Link>
                </li>
            </ul>
            {/* Mobile Button */}
            <div className='block sm:hidden'>
                <AiOutlineMenu size={20}/>
            </div>
            {/* Mobile Menu */}
            <div className='sm:hidden absolute top-0 left-0 right-0
             bottom-0 flex justify-center items-center w-full
              h-screen'>
            <ul className='flex flex-col mx-5 gap-3'>
                <li className='navbar-li'>
                <Link className='cursor-pointer' href='/about-me'> About Me</Link>
                </li>
                <li className='navbar-li'>
                <Link className='cursor-pointer' href='/projects'> Projects</Link>
                </li>
                <li className='navbar-li'>
                    <Link href="#skills">Skills</Link>
                </li>
            </ul>
            </div>

            
        </div>
    </div>
  )
}

export default NavBar