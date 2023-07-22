"use client";
import { createContext, useState, useEffect } from "react";
import Colors from "../constants/colors";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [clr, setClr] = useState("secondaryColor");
  const [textClr, setTextClr] = useState("textColorLight");
  return (
    <Context.Provider value={{ nav, setNav, clr, setClr, textClr, setTextClr }}>
      {children}
    </Context.Provider>
  );
};
