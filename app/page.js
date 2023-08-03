"use client";
import Hero from '/components/Hero'
import VideoSlider from '../components/video/VideoSlider'
import { useEffect } from 'react';
import Modal from '/components/Modal';
import { useContext } from 'react';
import { Context } from '/context/Context';

export default function Home() {
  const {isPaymentCompleted, setIsPaymentCompleted} = useContext(Context)
  useEffect(()=>{
    window.scrollTo(0,1)
  },[])

  return (
<div className='ease-in-out transistion flex flex-col' >
  <Modal show={isPaymentCompleted} onClose={() => setIsPaymentCompleted(false)} />
<Hero bg="custom-img" buttonTarget="projects" message="Software Developer" heading="Conrad Etherington" buttonText="Hello World!" buttonTextAlt="Hello."/>
<VideoSlider />
</div>
  )
}
