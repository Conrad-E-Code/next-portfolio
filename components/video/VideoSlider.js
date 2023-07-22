"use client";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import sliderData from "@/constants/videoSliderData";
import MyVideo from "./MyVideo";
import Colors from "@/constants/colors";

const VideoSlider = ({ slides }) => {
  const { current, setCurrent } = useContext(Context);

  const length = sliderData.length;
  const { textClr, clr } = useContext(Context);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div
      className=" h-screen bg-fixed bg-cover custom-img w-screen p-10"
      id="projects"
    >
      <h1 className={`text-${textClr} text-xl font-semibold`}>
        Technical Projects
      </h1>
      <div className=" z-40 flex bg-transparent">
        <div className="relative flex justify-center p-4">
          {sliderData.map((slide, index) => {
            return (
              <div key={index + "keybo"} className="">
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
                    <div className="">
                      <MyVideo
                        videoUrl={slide.videoUrl}
                        onClick={() => console.log(slide.info)}
                      />
                    </div>
                  )}
                </div>
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="z-40 cursor-pointer
                             text-textColorLight/80 absolute right-[20px] top-[20px]"
                  size={50}
                />
                {index === current &&  (
                  <div style={{ color: Colors[textClr]}}
                    className={`text-xl font-semibold max-w-[460px] bg-accentColorB bg-opacity-[0.8]`}
                  >
                    <h1 className="text-3xl font-bold">{slide.title}</h1>
                    <p className="">{slide.info}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
