"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBarButtons = ({ liClass, light }) => {
  const router = useRouter();
  return (
    <>
      {light ? (
        <h1
          onClick={() => router.push("/")}
          className={` hover:bg-accentColorB/80 cursor-pointer font-bold py-4 my-0`}
        >
          Conrad Etherington
        </h1>
      ) : (
        <h1
          onClick={() => router.push("/")}
          className={`hover:bg-accentColor/80 cursor-pointer font-bold py-4 my-0`}
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

        <Link href="#projects">
          <li className={liClass}>Projects</li>
        </Link>
      </ul>
    </>
  );
};

export default NavBarButtons;
