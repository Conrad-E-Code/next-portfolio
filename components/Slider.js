"use client";
import React from 'react'
import apiIcon from "../constants/images/api-icon.png"
import elephant from "../constants/images/elephant.png"
import htmlIcon from "../constants/images/html_icon.png"
import railsLogo from "../constants/images/rails-logo.png"
import rubyIcon from "../constants/images/ruby.png"
import jsIcon from "../constants/images/Unofficial_JavaScript_logo_2.svg.png"
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const sliderData = [apiIcon, elephant, htmlIcon, railsLogo, rubyIcon, jsIcon]
const Slider  = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = sliderData.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1)
    }
  return (
    <div className="h-screen bg-fixed bg-cover custom-img w-[100%] p-10" id="skills">
        <h1>SKILLS</h1>
        <div className=" z-40 flex bg-transparent">
        <div className="relative flex justify-center p-4">
            {sliderData.map((slide, index)=>{
                return (
                    <>
                    <FaArrowCircleLeft onClick={prevSlide} className='z-40 cursor-pointer
                             text-textColorLight/80 absolute left-[20px] top-[20px]' size={50} />
                    <div key={index + "keybo"} className={index === current ? 'opacity-[1] ease-in duration-1000': 'opacity-0'}>

                            
                            {index === current && (<Image src={slide} alt="slide" width={250} height={100}/>)}

                        </div>
                        <FaArrowCircleRight onClick={nextSlide} className='z-40 cursor-pointer
                             text-textColorLight/80 absolute right-[20px] top-[20px]' size={50} />      
                        </>)
            })}
        </div>
        </div>
    </div>
  )
}

export default Slider