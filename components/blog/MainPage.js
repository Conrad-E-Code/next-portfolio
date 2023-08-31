"use client";
import React, {useContext, useEffect} from 'react'
import BlogMap from "./BlogMap"
import BlogPost from './BlogPost';
import {Context} from "/context/Context"
import HideButton from './HideButton';
import {usePathname} from "next/navigation"


const MainPage = () => {
    const path = usePathname()
    const {hideBar, setSingleBlog, singleBlog} = useContext(Context)
    useEffect((
        )=>{
          
            fetch(`/api/blogs/${path.split("/blog")[1]}`)
            .then(r => r. ok ? r.json() : console.log({error: r}))
            .then(data => setSingleBlog(data))
          
        },[path])

  return (
    // 
    <div id="main-page" className="relative flex h-full max-w-full max-h-100vh flex-1 overflow-hidden bg-gray-800">
        {hideBar ? <HideButton /> : null}
    <div className="flex h-full max-w-full flex-1 flex-col" >
        <main className="relative h-full w-full transition-width overflow-auto flex-1">
            <div className="flex h-full">
                <div className="flex-1 overflow-hidden">
                    <div className="h-full dark:bg-gray-800">
                        {/* SKIP 2 DIVS */}
                        <div className="flex h-full flex-col items-center justify-between pb-64">
                            {/* Header */}
                            <div className="align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]">
                                <h1 className="text-4xl font-semibold text-center text-gray-200/30 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow">
                                    ConRAD
                                </h1>
                            </div>
                            
                        {path.split("/blog").length > 1 ? <div id="BlogMap" className="w-full text-[#c9cdd3]"> <BlogPost blog={singleBlog}  /> </div> : null}

                        </div>


                    </div>

                </div>


            </div>
        </main>
    </div>
  </div>
  )
}

export default MainPage