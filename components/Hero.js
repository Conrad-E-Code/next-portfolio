"use client";
import React from "react";
import MyVideo from "./video/MyVideo";
import { Context } from "../context/Context";
import { useContext } from "react";
import Colors from "@/constants/colors";


const Hero = ({ heading, message, buttonText, buttonTextAlt, buttonTarget}) => {
  const { textClr } = useContext(Context);
  function handleClick() {
    console.log(buttonTarget)
    const getTarget = document.getElementById(buttonTarget);
    if (getTarget) {getTarget.scrollIntoView({ behavior: "smooth" });
  }
  }
  // console.log("hero textClr: ", textClr);
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover custom-img">
      {/* OVERLAY */}

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primaryColor/70 z-[2]" />
      <div style={{color: Colors[textClr]}}  className=" text-textColorDark z-[2] ease-in duration-300">
        <h2 className={`text-5xl font-semibold `}>{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        {textClr === "textColorLight" ? <button onClick={handleClick} className={`hover:bg-accentColorB hover:text-textColorDark hover:border-textColorDark  px-8 py-2 border border-${textClr} ease-in duration-200`}>{buttonText}</button> : <button onClick={handleClick} className={` hover:bg-accentColor hover:text-textColorLight hover:border-textColorLight px-8 py-2 border border-textColorDark ease-in duration-200`}>{buttonTextAlt}</button>}
      </div>
    </div>
  );
};

export default Hero;
