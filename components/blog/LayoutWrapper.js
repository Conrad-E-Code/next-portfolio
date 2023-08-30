"use client";
import React from "react";
import SideBar from "/components/blog/SideBar";
import MainPage from "/components/blog/MainPage";
import { usePathname } from "next/navigation";

const LayoutWrapper = () => {
  const path = usePathname();
  return (
    <div className="flex h-full w-full flex-col">
      <div
        className={
          path.split("/blog").length >= 2
            ? ` grow overflow-hidden`
            : `hidden`
        }
      >
        <div className="overflow-hidden w-full h-full relative flex z-0">
          <div className="dark flex-shrink-0 overflow-x-hidden bg-gray-900">
            <SideBar />
          </div>
          {/* Begin main page here */}
          <MainPage />
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
