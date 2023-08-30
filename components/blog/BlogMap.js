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
    <div id="BlogMap" className="w-full text-[#c9cdd3] bg-gray-50/20 px-20">
      {/* WelCOME CHAT */}
      {/* <ChatPost /> */}
      {/* //map through blogs here! */}
      {serverBlogs && serverBlogs.length > 0 ? (
        <LoadingList
          items={serverBlogs.map((blog) => {
            return <BlogPost title={blog.title} blogId={blog.id} userInput={blog.content} />;
          })}
        />
      ) : (
        <div>Generating Response...</div>
        
      )}
      <LoadingList
        items={[
          <BlogPost
            title={`Howdy`}
            blogId={"t"}
            userInput={
              "DUMMY BLOG ```console.log('and some code')``` And More Text! "
            }
          />,
        ]}
        waitTimer={7000}
      />
    </div>
  );
};

export default BlogMap;
