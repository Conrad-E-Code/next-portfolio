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

const BlogPost = ({blog}) => {
  const path = usePathname()
  const {singleBlog, setSingleBlog} = useContext(Context)




  function processUserInput(input) {
    // Regular expression to match code blocks enclosed in triple backticks
    const codeBlockRegex = /```([\s\S]*?)```/g;
  
    // Initialize the index to keep track of the last processed position
    let lastIndex = 0;
    
    // Initialize an array to store processed blocks
    const processedBlocks = [];
  
    // Iterate through the input using a loop
    while (true) {
      // Find the next code block match using the regular expression
      const match = codeBlockRegex.exec(input);
  
      // If no more matches are found, exit the loop
      if (!match) {
        // Extract the remaining text after the last code block
        const remainingText = input.substring(lastIndex);
        
        // If there's remaining text, add it as a text block
        if (remainingText.trim() !== '') {
          processedBlocks.push({ type: 'text', content: remainingText });
        }
        
        // Exit the loop
        break;
      }
  
      // Extract the text before the code block match
      const beforeText = input.substring(lastIndex, match.index);
      
      // If there's text before the code block, add it as a text block
      if (beforeText.trim() !== '') {
        processedBlocks.push({ type: 'text', content: beforeText });
      }
  
      // Add the code block to the processed blocks array
      processedBlocks.push({ type: 'code', content: match[1] });
  
      // Update the index to the position after the code block match
      lastIndex = match.index + match[0].length;
    }
  
    // Return the array of processed blocks
    return processedBlocks.map(block => blockToComponent(block))
  }
  function blockToComponent(block) {
    if (block.type === "text") {
      return <TypingEffect text={block.content} typingSpeed={15} />
    }
    else if (block.type === "code") {
      return <LiveCode code={block.content} typingSpeed={15} />
    }
    else {
      return <div>{block.content} format error BlogPost</div>
    }
  }

  return (
    <div key={`BP-key-${path}`}  className='bg-gray-50/20 px-20 my-2'>
      {/* <h1 className={`font-semibold underline`}>{blog.title}</h1> */}
      {blog && blog.content? <LoadingList instant={true} items={processUserInput(blog.content)} waitTimer={2600} />: null}
    </div>
  )
}

export default BlogPost