"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WiDaySunny, WiMoonWaxingCrescent2 } from "react-icons/wi";
import { useContext } from "react";
import { Context } from "/context/Context";
const NavBarButtons = ({ liClass, light }) => {
  const router = useRouter();
  const { textIsDark, setTextIsDark, setTextClr } = useContext(Context);
  return (
    <div className={`flex`}>
    {textIsDark ? <WiMoonWaxingCrescent2 onClick={()=>{setTextIsDark(!textIsDark)
setTextClr("textColorLight")}
} className='cursor-pointer ease-in-out duration-700 rounded hover:bg-textColorLight/80' size={40}/> : <WiDaySunny onClick={()=>{setTextIsDark(!textIsDark)
    setTextClr("textColorDark")}} className='cursor-pointer ease-in-out duration-700 rounded hover:bg-textColorDark/50' size={40}/>}
      {light ? (
        <h1
          onClick={() => router.push("/")}
          className={` hover:bg-accentColorB/80 cursor-pointer font-bold py-4 my-0 ml-10`}
        >
          Conrad Etherington
        </h1>
      ) : (
        <h1
          onClick={() => router.push("/")}
          className={`hover:bg-accentColor/80 cursor-pointer font-bold py-4 my-0 ml-10`}
        >
          Conrad Etherington
        </h1>
      )}
      <ul className="hidden sm:flex mx-5 gap-3 ">
        <Link className="cursor-pointer" href="/about-me">
          <li className={liClass}>About Me</li>
        </Link>
        <Link
          className="cursor-pointer"
          href="/skills
        "
        >
          <li className={liClass}>Skills</li>
        </Link>

        <Link href="/resume">
          <li className={liClass}>Resume</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBarButtons;
