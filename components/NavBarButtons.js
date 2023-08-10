"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WiDaySunny, WiMoonWaxingCrescent2 } from "react-icons/wi";
import { useContext, useState } from "react";
import { Context } from "/context/Context";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'
import Colors from "/constants/colors";

const links = [
  {
    name: "Log in",
    path: "/about-me",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  }
  
]

const NavBarButtons = ({ liClass, light }) => {
  const path = usePathname();

  //state and handler for dropdown menu
  const [dropDown, setDropDown] = useState(false);
  const handleDropdownToggle = () => {
    setDropDown(!isDropdownOpen);
  };


  const router = useRouter();
  const { textIsDark, setTextIsDark, setTextClr, textClr } = useContext(Context);
  return (
    <div className={`flex`}>
    {textIsDark ? <WiMoonWaxingCrescent2 onClick={()=>{setTextIsDark(!textIsDark)
setTextClr("textColorLight")}
} className='cursor-pointer ease-in-out duration-700 rounded hover:bg-textColorLight/80' size={40}/> : <WiDaySunny onClick={()=>{setTextIsDark(!textIsDark)
    setTextClr("textColorDark")}} className='cursor-pointer ease-in-out duration-700 rounded hover:bg-textColorDark/50' size={40}/>}
      {light ? (
        <div className="relative"><h1
        onClick={() => router.push("/")}
        className={`hover:bg-accentColorB/80 cursor-pointer font-bold py-4 my-0 ml-10`}
      >
        Conrad Etherington
      </h1>
      {path === "/" ? <motion.span style={{backgroundColor: Colors[textClr]}} className={`absolute left-10 bottom-2 right-10 block h-[3px] w-[79%]`} /> : null}
      </div>
      ) : (
        <div className="relative"><h1
          onClick={() => router.push("/")}
          className={`hover:bg-accentColor/80 cursor-pointer font-bold py-4 my-0 ml-10`}
        >
          Conrad Etherington
        </h1>
        {path === "/" ? <motion.span style={{backgroundColor: Colors[textClr]}} className={`absolute left-10 bottom-2 right-10 block h-[3px] w-[79%]`} /> : null}
        </div>
        
      )}
     
      <ul className="hidden sm:flex mx-5 gap-3 ">
        {links.map((link) => {
          return (
            <div key={link.name} className="relative">
            <Link href={link.path}><li className={liClass}>{link.name}</li>
            {path === link.path ? <motion.span style={{backgroundColor: Colors[textClr]}} className={`absolute left-0 bottom-2 block h-[3px] w-full`} /> : null}
            </Link>
            </div>
            )
        })}
      </ul>
    </div>
  );
};

export default NavBarButtons;
