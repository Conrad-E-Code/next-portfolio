"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const NavBarButtons = ({liClass, light}) => {
    const router = useRouter()
  return (
    <>
    {light ? <h1 onClick={()=> router.push("/")} className={` hover:bg-accentColor/80 cursor-pointer font-bold p-4 my-0`}>Conrad Etherington</h1> : <h1 onClick={()=> router.push("/")} className={` hover:bg-accentColorB/80 cursor-pointer font-bold py-4 my-0`}>Conrad Etherington</h1>}
    <ul className='hidden sm:flex mx-5 gap-3 '>
        <li className={liClass}>
        <Link className='cursor-pointer' href='/about-me'> About Me</Link>
        </li>
        <li className={liClass}>
        <Link className='cursor-pointer' href='/projects'> Skills</Link>
        </li>
        <li className={liClass}>
            <Link href="#projects">Projects</Link>
        </li>
    </ul>
    </>
  )
}

export default NavBarButtons