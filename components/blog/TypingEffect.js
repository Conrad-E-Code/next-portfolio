"use client";
import React, { useState, useEffect, useRef } from 'react';


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

  return (
    <div
      className='text-left overflow-y-auto min-h-18 max-h-full p-4'
      id="chat-post"
    >
      {displayedText}
    </div>
  );
}

export default TypingEffect;
