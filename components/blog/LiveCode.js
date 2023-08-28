"use client";
import {useState, useEffect} from "react"

function LiveCode({ code, typingSpeed }) {
    const [isCopied, setIsCopied] = useState(false);
    const [displayedCode, setDisplayedCode] = useState('');
    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(code);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
          console.error('Copying to clipboard failed:', err);
        }
      };
  
    useEffect(() => {
      let currentIndex = 0;
  
      const typingInterval = setInterval(() => {
        if (currentIndex <= code.length) {
          setDisplayedCode(code.slice(0, currentIndex));
  
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [code, typingSpeed]);
  
    useEffect(() => {
      Prism.highlightAll(); // Highlight the code using Prism after typing effect
    }, [displayedCode]);
  
    return (
      <div className="code-block">
              <div className="p-2 mb-2 flex bg-chatHeaderColor justify-between items-center">
        <span className=" text-xs text-gray-300">JavaScript</span>
        <button
          className={`copy-button ${isCopied ? 'copied' : ''}`}
          onClick={handleCopyClick}
        >
          {isCopied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
        <pre>
          <code className="language-js">{displayedCode}</code>
        </pre>
      </div>
    );
  }
  
  export default LiveCode;