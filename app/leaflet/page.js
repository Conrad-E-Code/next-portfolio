"use client";
import React from "react";
import BarrelMap from "../../components/mapping/BarrelMap";

const page = () => {
  return (
    <div>
      <BarrelMap import={"./MyMap"} />
    </div>
  );
};

export default page;
