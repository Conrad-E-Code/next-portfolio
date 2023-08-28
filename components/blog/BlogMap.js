"use client";
import React from 'react'
import ChatPost from './ChatPost'
import { useRef } from 'react';
import BlogPost from "./BlogPost"

const BlogMap = () => {
  return (
    <div id="BlogMap" className='w-full text-[#c9cdd3] bg-gray-50/20 px-20'>
        <BlogPost />
    </div>
  )
}

export default BlogMap