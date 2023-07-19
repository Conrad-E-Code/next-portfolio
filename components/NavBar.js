"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavBar = () => {
    const router = useRouter()
  return (
    <div className=' flex flex-col'>
        <div className='flex'>
                <h1 onClick={()=> router.push("/")} className='cursor-pointer'>Conrad Etherington</h1>
<Link className='cursor-pointer' href='/projects'> Projects</Link>
        </div>
    </div>
  )
}

export default NavBar