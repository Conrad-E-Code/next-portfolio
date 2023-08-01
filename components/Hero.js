"use client";
import React from "react";
import MyVideo from "./video/MyVideo";
import { Context } from "../context/Context";
import { useContext, useEffect } from "react";
import Colors from "/constants/colors";



const Hero = ({ heading, message, buttonText, buttonTextAlt, buttonTarget, bg, smbg}) => {
  const { textClr } = useContext(Context);
  useEffect(()=>{
    function getUser(){
    }
    getUser();
  },[])
  function handleClick() {
    console.log(buttonTarget)
    const getTarget = document.getElementById(buttonTarget);
    if (getTarget) {getTarget.scrollIntoView({ behavior: "smooth" });
  }
  }
  // console.log("hero textClr: ", textClr);
  return (
    <div className={`${bg} sm:${smbg} flex items-center justify-center h-screen bg-fixed bg-cover `}>
      {/* OVERLAY */}

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primaryColor/70 z-[2]" />
      <div style={{color: Colors[textClr]}}  className=" text-textColorDark z-[2] ease-in duration-300">
        <h2 className={`text-5xl font-semibold `}>{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button
          onClick={handleClick}
          className={`${
            textClr === "textColorLight"
              ? "hover:bg-accentColorB hover:text-textColorDark hover:border-textColorDark"
              : "hover:bg-accentColor hover:text-textColorLight hover:border-textColorLight"
          } px-8 py-2 border ${
            textClr === "textColorLight"
              ? "border-textColorLight"
              : "border-textColorDark"
          } ${
            textClr === "textColorLight" ? "bg-secondaryColor/50" : ""
          } transition ease-in-out duration-200`}
        >
          {textClr === "textColorLight" ? buttonText : buttonTextAlt}
        </button>
        {"Hello World!"}
      </div>
    </div>
  );
};

export default Hero;
