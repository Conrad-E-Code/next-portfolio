"use client";
import { createContext, useState, useEffect } from "react";
import Colors from "../constants/colors";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  //user
  const [user, setUser] = useState(null);
  //toggle for mobile menu nav
  const [nav, setNav] = useState(false);
  //color and text color for nav bar, etc.
  const [clr, setClr] = useState("secondaryColor");
  const [textClr, setTextClr] = useState("textColorLight");
  const [textIsDark, setTextIsDark] = useState(false);
  //current for video Slider
  const [current, setCurrent] = useState(0);
  return (
    <Context.Provider
      value={{
        current,
        setCurrent,
        nav,
        setNav,
        clr,
        setClr,
        textClr,
        setTextClr,
        textIsDark,
        setTextIsDark,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
