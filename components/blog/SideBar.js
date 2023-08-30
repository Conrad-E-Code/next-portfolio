"use client";
import React, {useContext, useState} from 'react'
import BlogList from "./BlogList"
import HideButton from './HideButton';
import {Context} from "/context/Context"

const SideBar = () => {
  const {hideBar} = useContext(Context)

  if (!hideBar) {return (
   <div className={"h-full w-[260px] hidden sm:block" }>
    <div className="h-full min-h-0 flex-col">
      <div className="relative h-full w-full flex-1 items-start border-white/20">
      <nav className="flex h-[100vh] w-full flex-col p-2">
          <div className="mb-1 flex flex-row gap-2">
            <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-grow overflow-hidden">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span
                style={{ fontSize: ".75rem" }}
                className="truncate"
              >
                New Blog
              </span>
            </a>
<HideButton />
          </div>
          {/* SKIPPED A COUPLE hidden divs for no chat history options */}
 <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
<BlogList />
          </div>
        </nav> 
      </div>
    </div>
  </div>
  )}

}

export default SideBar