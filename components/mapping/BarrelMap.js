"use client";
import React from "react";
import { useState, useEffect } from "react";

const BarrelMap = ({importPath}) => {
  const [Client, setClient] = useState();
  useEffect(() => {
    (async () => {
      if (typeof global.window !== "undefined") {
        const newClient = (await import(`${importPath}`)).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return !Client || typeof global.window === "undefined" ? null : <Client />;
};

export default BarrelMap;
