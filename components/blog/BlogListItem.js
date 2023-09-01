"use client";
import React from 'react'
import { useRouter, usePathname } from "next/navigation";


const BlogListItem = ({title, blogId}) => {
    const path = usePathname()
    const router = useRouter()
  return (
    <li onClick={(e)=>{
      router.push(`/blog/${blogId}`)}} className={"relative"} style={{
        opacity: 1,
        height: "auto",

      }}>
        <a  className={ `flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 bg-gray-900 group ${path === `/blog/${blogId}` ? "bg-gray-200/20" : null }`}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                {title}
                {/* <div class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-400/20 group-hover:from-[#2A2B32]">
                </div> */}
            </div>
        </a>

      </li>
  )
}

export default BlogListItem