"use client";
import React from "react";
import MyVideo from "./video/MyVideo";
import { Context } from "../context/Context";
import { useContext } from "react";
import Colors from "@/constants/colors";


const Hero = ({ heading, message }) => {
  const { textClr } = useContext(Context);
  // console.log("hero textClr: ", textClr);
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover custom-img">
      {/* OVERLAY */}

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primaryColor/70 z-[2]" />
      <div style={{color: Colors[textClr]}}  className=" text-textColorDark z-[2] ease-in duration-300">
        <h2 className={`text-5xl font-semibold `}>{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        {textClr === "textColorLight" ? <button className={`hover:text-textColorDark hover:border-textColorDark hover:bg-accentColor px-8 py-2 border border-${textClr} ease-in duration-200`}>Hello World!</button> : <button className={`hover:bg-accentColorB hover:text-textColorLight hover:border-textColorLight px-8 py-2 border border-${textClr} ease-in duration-200`}>Hello!</button>}
      </div>
    </div>
  );
};

export default Hero;
