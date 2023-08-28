"use client";
import React, { useState, useEffect, useRef } from 'react';

function TypingEffect({ text, typingSpeed }) {
  const [displayedText, setDisplayedText] = useState('');
  const chatContainerRef = useRef(null);

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

  // useEffect(() => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //   }
  // }, [displayedText]);

  // ADD STATE HERE TO PARENT CONTAINER AND TRY TO GET THIS REF UP A LEVEL TO SEE IF IT WORKS BETTER

  return (
    <div
      className='text-left overflow-y-auto min-h-18 max-h-full p-4'
      ref={chatContainerRef}
    >
      {displayedText}
    </div>
  );
}

export default TypingEffect;
