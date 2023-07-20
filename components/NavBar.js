"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Colors from '../constants/colors'

const NavBar = () => {
    const [clr, setClr] = useState(Colors.secondaryColor)
    const router = useRouter()
    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 10){
                setClr(Colors.primaryColor)
            }
            else {
                setClr(Colors.accentColorB)
            }
        }
    },[])
  return (
    <div style={{backgroundColor: `${clr}`}} className=' fixed top-0 w-full ease-in z-20'>
        <div className=' text-textColorLight'>
            <ul className='flex mx-5 gap-3'>
                <li className='navbar-li'>
                <h1 onClick={()=> router.push("/")} className='cursor-pointer'>Conrad Etherington</h1>
                </li>
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
  )
}

export default NavBar