"use client";
import Image from 'next/image';
import React from 'react'
import { useContext } from 'react';
import { Context } from '@/context/Context';
import Colors from '@/constants/colors';
import Hero from '@/components/Hero';
const AboutMe = () => {

  const { textClr } = useContext(Context);
  return (
    <div >
      <Hero message="Glad you're here" heading="CI/CD Pipeline" buttonText={"New Features!"} buttonTextAlt={"Coming Soon."} buttonTarget={"coming-soon"} bg="pipeline"/>
      <div id="coming-soon" className='h-screen bg-fixed bg-cover small-pipeline'>
      <embed src="/resume.pdf" type='application/pdf' width='100%' height='900px'></embed>
      </div>
    </div>
  )
}

export default AboutMe