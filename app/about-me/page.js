"use client";
import Image from 'next/image';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Context } from '/context/Context';
import Colors from '/constants/colors';
import Hero from '/components/Hero';
import { useRouter } from 'next/navigation';
import SignForm from '../../components/SignForm';
import { set } from 'mongoose';

const AboutMe = () => {
  const router = useRouter();
  const { textClr } = useContext(Context);
  const [blinkingColor, setBlinkingColor] = useState('green');

  // Start the blinking effect when the component mounts
  useEffect(() => {
    const blinkingInterval = setInterval(() => {
      switch (blinkingColor) {
        case 'red':
          setBlinkingColor('green');
          break;
        case 'yellow':
          setBlinkingColor('red');
          break;
        case 'green':
          setBlinkingColor('yellow');
          break;
        default:
          setBlinkingColor('red');
          break;
      }
    }, 1800); // Adjust the interval to control the speed of the blinking effect

    return () => {
      clearInterval(blinkingInterval);
    };
  }, [blinkingColor]);

  return (
    <div>
      <Hero
        message="Glad you could make it!"
        heading="CI/CD Pipeline"
        buttonText={"See What's New!"}
        buttonTextAlt={"Coming Soon."}
        buttonTarget={"coming-soon"}
        bg="pipeline"
      />
      <div
        style={{ color: Colors[textClr] }}
        id="coming-soon"
        className="h-screen bg-fixed bg-cover bg-center small-pipeline flex justify-center flex-col items-center"
      >
        <div
          id="flasher"
          onClick={() => {
            router.push("/integrations/payments");
          }}
          className={`w-[45vw] bg-red-600 h-[20vh] ${
            blinkingColor === 'red' ? 'bg-opacity-80' : 'bg-opacity-30'
          } hover:bg-opacity-100 cursor-pointer ease-in-out duration-700 text-center rounded justify-center mt-10`}
        >
          SQUARE PAYMENT SDK INTEGRATION
        </div>
        <div
          id="flasher"
          onClick={() => {
            router.push("/projects");
          }}
          className={`w-[45vw] bg-amber-400 h-[20vh] ${
            blinkingColor === 'yellow' ? 'bg-opacity-80' : 'bg-opacity-30'
          } hover:bg-opacity-100 cursor-pointer ease-in-out duration-700 text-center rounded justify-center mt-10`}
        >
          RENDERING PROJECTS
        </div>
        <div
          id="flasher"
          onClick={() => {
            router.push("/sign-up-form");
          }}
          className={`w-[45vw] bg-green-600 h-[20vh] ${
            blinkingColor === 'green' ? 'bg-opacity-80' : 'bg-opacity-30'
          } hover:bg-opacity-100 cursor-pointer ease-in-out duration-700 text-center rounded justify-center mt-10`}
        >
          ADDING USERS TO MONGO DB ATLAS
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
