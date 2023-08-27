"use client"
import React, { useState } from 'react';
import {usePathname} from "next/navigation"
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Import Prism.js CSS
import 'prismjs/components/prism-javascript'; // Import Prism.js language support

function CodeBlock({ code }) {


  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error('Copying to clipboard failed:', err);
    }
  };

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
        <code className="language-js">{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
