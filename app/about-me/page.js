"use client";
import Image from 'next/image';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Context } from '/context/Context';
import Colors from '/constants/colors';
import Hero from '/components/Hero';
import { useRouter } from 'next/navigation';
import SignForm from '../../components/SignForm';

const AboutMe = () => {
  const router = useRouter();
  const { textClr } = useContext(Context);
  const [flashing, setFlashing] = useState(false);

  // Start the flashing effect when the component mounts
  useEffect(() => {
    const flashingInterval = setInterval(() => {
      setFlashing(prevFlashing => !prevFlashing);
    }, 750); // Adjust the interval to control the speed of the flashing effect

    return () => {
      clearInterval(flashingInterval);
    };
  }, []);

  return (
    <div>
      <Hero message="Glad you could make it!" heading="CI/CD Pipeline" buttonText={"See What's New!"} buttonTextAlt={"Coming Soon."} buttonTarget={"coming-soon"} bg="pipeline"/>
      <div style={{color: Colors[textClr]}} id="coming-soon" className='h-screen bg-fixed bg-cover small-pipeline flex justify-center flex-col items-center'>
        <div
          id="flasher"
          onClick={() => { router.push("/projects") }}
          className={`w-[45vw] bg-amber-400 h-[20vh] ${flashing ? 'bg-opacity-30' : 'bg-opacity-80'} hover:opacity-100 cursor-pointer ease-in-out duration-700 text-center rounded justify-center`}
        >
          RENDERING PROJECTS
        </div>
        <div
          id="flasher"
          onClick={() => { router.push("/sign-up-form") }}
          className={`w-[45vw] bg-red-600 h-[20vh] ${!flashing ? 'bg-opacity-30' : 'bg-opacity-80'} hover:opacity-100 cursor-pointer  text-center rounded justify-center mt-10`}
        >
          ADDING USERS TO MONGO DB ATLAS
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
