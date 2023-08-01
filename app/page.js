"use client";
import Hero from '/components/Hero'
import VideoSlider from '../components/video/VideoSlider'
import { useEffect } from 'react';

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0,1)
  },[])

  return (
<div className='ease-in-out transistion flex flex-col' >
<Hero bg="custom-img" buttonTarget="projects" message="Software Developer" heading="Conrad Etherington" buttonText="Hello World!" buttonTextAlt="Hello."/>
<VideoSlider />
</div>
  )
}
