"use client";
import React from 'react'
import CodeBlock from '../CodeBlock'
import ChatPost from './ChatPost'
import TypingEffect from './TypingEffect';
import LiveCode from './LiveCode';
import LoadingList from './LoadingList';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {useContext} from "react"
import {Context} from "/context/Context"
import Link from 'next/link';
import MyLink from './MyLink';

const BlogPost = ({blog}) => {
  const path = usePathname()
  const {singleBlog, setSingleBlog} = useContext(Context)




  function processUserInput(input) {
    const combinedRegex = /```([\s\S]*?)```|lll([\s\S]*?)lll/g;
  
    let lastIndex = 0;
    const processedBlocks = [];
  
    while (true) {
      const match = combinedRegex.exec(input);
  
      if (!match) {
        const remainingText = input.substring(lastIndex);
  
        if (remainingText.trim() !== '') {
          processedBlocks.push({ type: 'text', content: remainingText });
        }
  
        break;
      }
  
      const beforeText = input.substring(lastIndex, match.index);
  
      if (beforeText.trim() !== '') {
        processedBlocks.push({ type: 'text', content: beforeText });
      }
  
      if (match[1]) {
        processedBlocks.push({ type: 'code', content: match[1] });
      } else if (match[2]) {
        processedBlocks.push({ type: 'link', content: match[2] });
      }
  
      lastIndex = match.index + match[0].length;
    }
  
    return processedBlocks.map(block => blockToComponent(block));
  }
  function blockToComponent(block) {
    if (block.type === "text") {
      return <TypingEffect text={block.content} typingSpeed={15} />;
    } else if (block.type === "code") {
      return <LiveCode code={block.content} typingSpeed={15} />;
    } else if (block.type === "link") {
      // Adjust this part to render your desired component for link sections
      return <MyLink content={block.content} />
    } else {
      return <div>{block.content} format error BlogPost</div>;
    }
  }

  return (
    <div key={`BP-key-${path}`}  className='bg-gray-50/20 px-20 my-2'>
      
      {blog && blog.content? <><h1 className={`font-semibold underline`}>{blog.title}</h1><LoadingList instant={true} items={processUserInput(blog.content)} waitTimer={2600} /></>: null}
    </div>
  )
}

export default BlogPost