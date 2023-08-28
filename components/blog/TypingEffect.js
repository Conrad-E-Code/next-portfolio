"use client";
import React, { useState, useEffect } from 'react';
function TypingEffect({ text, typingSpeed }) {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
      let currentIndex = 0;
  
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, typingSpeed]);
  
    return <div className='text-left'>{displayedText}</div>;
  }

  export default TypingEffect