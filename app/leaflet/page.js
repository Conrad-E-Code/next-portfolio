"use client";
import React from "react";
import BarrelMap from "../../components/mapping/BarrelMap";

const page = () => {
  return (
    <div>
      <BarrelMap importPath={"./MyMap"} />
    </div>
  );
};

export default page;
