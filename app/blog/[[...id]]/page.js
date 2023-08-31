
"use client";
import React from "react";
import MainPage from "/components/blog/MainPage"
import SideBar from "/components/blog/SideBar"
import { useEffect, useState } from "react";
import { useContext } from "react";
import {Context} from "/context/Context"
const page = ({params}) => {

  const {serverBlogs, setServerBlogs} = useContext(Context)


  return (
    <div className="flex h-full w-full flex-col">
    </div>
  );

};


export default page;

  //parelell routing?
  // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
