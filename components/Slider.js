"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import sliderData from "@/constants/sliderData";
import Colors from "@/constants/colors";
import {Context} from "@/context/Context";
const Slider = ({ slides }) => {
  const { textClr } = useContext(Context);
  const [current, setCurrent] = useState(0);
  const [autoScrollActive, setAutoScrollActive] = useState(true); // Track auto-scrolling state
  const [showDetail, setShowDetail] = useState(false);
  const length = sliderData.length;
  const autoScrollInterval = 5000; // Adjust this value to change the auto-scrolling interval in milliseconds (5 seconds in this case).

  useEffect(() => {
    let interval;

    const autoScroll = () => {
      if (autoScrollActive) {
        setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
      }
    };

    if (autoScrollActive) {
      interval = setInterval(autoScroll, autoScrollInterval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [length, autoScrollActive]);

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
    setAutoScrollActive(false); // Turn off auto-scroll when arrow is clicked
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? length - 1 : prevCurrent - 1));
    setAutoScrollActive(false); // Turn off auto-scroll when arrow is clicked
  };

  return (
    <div className="h-screen bg-fixed bg-cover custom-img" id="skills">
      <div className="z-40 flex bg-transparent">
        <div className="relative flex justify-center p-4">
          {sliderData.map((slide, index) => {
            return (
              <div  className="flex flex-col sm:flex-row bg-primaryColor/50">
              <div key={index + "keybo"} className="mt-[15vh]">
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  style={{color: Colors[textClr]}}
                  className={`z-40 cursor-pointer absolute left-[20px] top-[20px] ease-in-out duration-1000`}
                  size={50}
                />
                <div
                  className={index === current ? "opacity-[1] ease-in duration-1000" : "opacity-0"}
                >
                  {index === current && (
                    <Image onClick={()=>{
                      setShowDetail((prev) => prev = !prev)
                      console.log(showDetail)}} className="transform-gpu hover:scale-110 transition-transform  duration-300"
                      src={slide.image}
                      alt="slide"
                      width={250}
                      height={100}
                    />
                  )}
                </div>
                <FaArrowCircleRight
                style={{color: Colors[textClr]}}
                  onClick={nextSlide}
                  className="z-40 cursor-pointer absolute right-[20px] top-[20px] ease-in-out duration-1000"
                  size={50}
                />
              </div>

              {index === current && (
              <div>
              <ul className="h-[80vh] overflow-auto">
                <li>
                  <div style={{color: Colors[textClr]}} className=" bg-primaryColor/50 p-4 m-4 mt-10 text-center text-5xl ease-in-out duration-1000">
                    {slide.info}
                  </div>
                </li>
                <li>
                  <div style={{color: Colors[textClr]}} className="text-xl font-semibold flex-col bg-primaryColor/50 p-4 w-[45vw] ease-in-out duration-1000">
                    {slide.message}
                  </div>
                </li>
              </ul>
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

export default Slider;
