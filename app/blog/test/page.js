"use client";
import React from "react";
import MainPage from "/components/blog/MainPage"
import SideBar from "/components/blog/SideBar"
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
    .then(data => {setServerBlogs(data)
      console.log(data)})
    .catch(err => console.log(err))
  }, [])
  return (
<></>
  );
};

export default page;
