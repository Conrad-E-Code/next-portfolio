"use client";
import React from "react";
import CodeBlock from "../../components/CodeBlock";
import MainPage from "../../components/blog/MainPage"
import SideBar from "../../components/blog/SideBar"
import { useEffect, useState } from "react";
import { useContext } from "react";
import {Context} from "/context/Context"
const page = () => {

  const {serverBlogs, setServerBlogs} = useContext(Context)
  useEffect(() => {
    fetch("/api/blogs")
    .then(
        r => r.ok ? r.json() : console.log(r))
    .catch(err => console.log(err))
    .then(data => setServerBlogs(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="flex h-full w-full flex-col">
      <div className="grow overflow-hidden">
        <div className="overflow-hidden w-full h-full relative flex z-0">
          <div className="dark flex-shrink-0 overflow-x-hidden bg-gray-900">
 <SideBar  />
          </div>
          {/* Begin main page here */}
<MainPage  />
        </div>
      </div>
    </div>
  );
};

export default page;
