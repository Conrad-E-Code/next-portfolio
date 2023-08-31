"use client";
import React from "react";
import ChatPost from "./ChatPost";
import { useRef, useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import LoadingList from "./LoadingList";
import { Context } from "/context/Context";
import { useContext } from "react";

const BlogMap = () => {
  const { setServerBlogs, serverBlogs } = useContext(Context);

  return (
    <div id="BlogMap" className="w-full text-[#c9cdd3]">
      {/* WelCOME CHAT */}
      {/* <ChatPost /> */}
      {/* //map through blogs here! */}
      <BlogPost title={"Welcome to my Blog!"} blogId={''} userInput={"This is my blog website, below you will find the five latest blogs or you can navigate through the blogs using the sidebar. Enjoy! ```console.log('check out the capabilities of this code block. try Copy Code')```"}
        />
      {serverBlogs && serverBlogs.length > 0 ? (
        
        <LoadingList instant={false}
          waitTimer={3000}
          items={serverBlogs.slice(0,5).map((blog) => {
            return <BlogPost title={blog.title} blogId={blog._id} userInput={blog.content} />;
          })}
        />
      ) : (
        <div>Generating Response...</div>
        
      )}
    </div>
  );
};

export default BlogMap;
