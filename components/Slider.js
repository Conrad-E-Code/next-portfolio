"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import sliderData from '@/constants/sliderData'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div
      className="h-screen bg-fixed bg-cover custom-img w-[100%] p-10"
      id="projects"
    >
      <h1>Projects</h1>
      <div className=" z-40 flex bg-transparent">
        <div className="relative flex justify-center p-4">
          {sliderData.map((slide, index) => {
            return (
              <div key={index + "keybo"}>
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="z-40 cursor-pointer
                             text-textColorLight/80 absolute left-[20px] top-[20px]"
                  size={50}
                />
                <div
                  className={
                    index === current
                      ? "opacity-[1] ease-in duration-1000"
                      : "opacity-0"
                  }
                >
                  {index === current && (
                    <Image
                      onClick={() => console.log(slide.info)}
                      src={slide.image}
                      alt="slide"
                      width={250}
                      height={100}
                    />
                  )}
                </div>
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="z-40 cursor-pointer
                             text-textColorLight/80 absolute right-[20px] top-[20px]"
                  size={50}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
