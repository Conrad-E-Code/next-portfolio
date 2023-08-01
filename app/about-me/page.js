"use client";
import React from 'react'
import { useContext } from 'react';
import { Context } from '/context/Context';
import Colors from '/constants/colors';
import Hero from '/components/Hero';
import { useRouter } from 'next/router';
import Cookies from "js-cookie"
import { useEffect } from 'react';

const page = () => {
    useEffect(() => {
        // Function to fetch user data from the session
        async function fetchUserData() {
          try {
            const userCookie = Cookies.get("nextUserSession");
            if (userCookie) {
              const userData = JSON.parse(userCookie);
              console.log(userData, "userDAta")
              setUser(userData);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
    
        fetchUserData();
      }, []);
    const { nav, setNav, clr, setClr, textClr, setTextClr, setTextIsDark, textIsDark, user, setUser } = useContext(Context)


    const header = `text-4xl font-bold text-${Colors[textClr]}`
    const paragraph = "text-xl font-semibold"

    console.log(header)
  return (
    <div className='pt-16'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className={`${header}`}>About Me</h1>
            <p className='text-xl font-semibold'>I am a full-stack web developer with a passion for creating beautiful, responsive, and accessible websites and applications.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className={`${header}`}>My Story</h1>
            <p className={`${paragraph}`}>I am a full-stack web developer with a passion for creating beautiful, responsive, and accessible websites and applications.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className={`${header}`}>My Values</h1>
            <p className={`${paragraph}`}>I am a full-stack web developer with a passion for creating beautiful, responsive, and accessible websites and applications.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className={`${header}`}>My Interests</h1>
            <p className={`${paragraph}`}>I am a full-stack web developer with a passion for creating beautiful, responsive, and accessible websites and applications.</p>
        </div>
    </div>
  )
}

export default page