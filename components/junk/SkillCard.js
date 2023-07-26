"use client";
import React from "react";
import Image from "next/image";
import sliderData from "@/constants/sliderData";

const SkillCard = () => {
  return (
    <div className="flex flex-col my-10 bg-red-200 align-middle">
      {sliderData.map((slide) => {
        return <div>
                        <Image
                      onClick={() => console.log("yo")}
                      src={slide.image}
                      alt="slide"
                      width={100}
                      height={100}
                    />
<ul>
    <li>
    <div className=" bg-blue-200 p-4  text-center">
                    {slide.info}
                </div>
    </li>
    <li>
    <div className=" flex-col bg-blue-200 p-4">
                    {slide.message}
                </div>
    </li>
</ul>
        </div>;
      })}
    </div>
  );
};

export default SkillCard;
