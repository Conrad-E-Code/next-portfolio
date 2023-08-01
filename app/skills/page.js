"use client";
import React, { useEffect } from "react";
import { useContext } from "react";
import {Context } from "/context/Context";
import Colors from "/constants/colors";
import Hero from "/components/Hero";
import Slider from "/components/Slider";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 15,
      behavior: "smooth",
    });
  }, []);
  const {
    nav,
    setNav,
    clr,
    setClr,
    textClr,
    setTextClr,
    setTextIsDark,
    textIsDark,
  } = useContext(Context);

  return (
    <div className="">
      <div className="transition ease-in-out h-screen bg-fixed bg-cover custom-img duration-300">
        <Hero
          message="Skills and Technologies"
          heading="Conrad Etherington"
          buttonText={"Explore"}
          buttonTextAlt={"Possibilities"}
          buttonTarget={"skills"}
        />
        <Slider />
      </div>
    </div>
  );
};

export default page;
