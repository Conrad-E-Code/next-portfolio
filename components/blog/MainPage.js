"use client";
import React, {useContext} from 'react'
import BlogMap from "./BlogMap"
import {Context} from "/context/Context"
import HideButton from './HideButton';


const MainPage = () => {
    const {hideBar} = useContext(Context)
  return (
    // 
    <div id="main-page" className="relative flex h-full max-w-full flex-1 overflow-hidden bg-gray-800">
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
                            <BlogMap />


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