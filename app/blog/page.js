"use client";
import React from "react";
import CodeBlock from "../../components/CodeBlock";
import MainPage from "../../components/blog/MainPage"
import SideBar from "../../components/blog/SideBar"
import { useEffect, useState } from "react";
const page = () => {
  const [serverBlogs, setServerBlogs] = useState([])
  useEffect(() => {
    fetch("/api/blogs")
    .then(r => r.json())
    .catch(err => console.log(err))
    .then(data => setServerBlogs(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="flex h-full w-full flex-col">
      <div className="grow overflow-hidden">
        <div className="overflow-hidden w-full h-full relative flex z-0">
          <div className="dark flex-shrink-0 overflow-x-hidden bg-gray-900">
 <SideBar />
          </div>
          {/* Begin main page here */}
<MainPage />
        </div>
      </div>
    </div>
  );
};

export default page;
