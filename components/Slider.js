import React from 'react'
import apiIcon from "../constants/images/api-icon.png"
import elephant from "../constants/images/elephant.png"
import htmlIcon from "../constants/images/html_icon.png"
import railsLogo from "../constants/images/rails-logo.png"
import rubyIcon from "../constants/images/ruby.png"
import jsIcon from "../constants/images/Unofficial_JavaScript_logo_2.svg.png"
import Image from 'next/image'
import { useState } from 'react'

const sliderData = [apiIcon, elephant, htmlIcon, railsLogo, rubyIcon, jsIcon]
const Slider  = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }
  return (
    <div className=" bg-secondaryColor w-[100%]" id="skills">
        <div className=" z-40flex bg-transparent">
            {sliderData.map((slide, index)=>{
                return (
                    <div key={index + "keybo"} className="">
                    <Image src={slide} width={100} height={100} objectFit='cover' />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Slider