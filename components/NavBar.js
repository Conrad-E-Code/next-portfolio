"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavBar = () => {
    const router = useRouter()
  return (
    <div className=' bg-secondaryColor fixed top-0 w-full ease-in z-20'>
        <div className=' text-textColorLight'>
            <ul className='flex mx-5 gap-3'>
                <li>
                <h1 onClick={()=> router.push("/")} className='cursor-pointer'>Conrad Etherington</h1>
                </li>
                <li>
                <Link className='cursor-pointer' href='/projects'> Projects</Link>
                </li>
                <li>
                    <Link href="#skills">Skills</Link>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default NavBar