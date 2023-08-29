"use client";
import React from 'react'
import ChatPost from './ChatPost'
import { useRef } from 'react';
import BlogPost from "./BlogPost"
import LoadingList from './LoadingList';

const BlogMap = () => {
  return (
    <div id="BlogMap" className='w-full text-[#c9cdd3] bg-gray-50/20 px-20'>
     
     {/* WelCOME CHAT */}
      {/* <ChatPost /> */}
            {/* //map through blogs here! */}
        <LoadingList items={[<BlogPost userInput={"Here is My Text ```console.log('and some code')``` And More Text!"} />]} waitTimer={7000}/>
    </div>
  )
}

export default BlogMap