"use client";
import React from "react";
import CodeBlock from "../../components/CodeBlock";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="grow overflow-hidden">
        <div className="overflow-hidden w-full h-full relative flex z-0">
          <div className="dark flex-shrink-0 overflow-x-hidden bg-gray-900">
            <div className="h-full w-[260px]">
              <div className="h-full min-h-0 flex-col">
                <div className="relative h-full w-full flex-1 items-start border-white/20">
                  <nav className="flex h-full w-full flex-col p-2">
                    <div className="mb-1 flex flex-row gap-2">
                      <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-grow overflow-hidden">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-4 w-4 shrink-0"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span className="truncate">New Blog</span>
                      </a>
                      <a className="flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                        <span style={{ 
                            position: "absolute",
                            border: "0px",
                            width: "1px",
                            height: "1px",
                            padding: "0px",
                            margin: "-1px",
                            overflow: "hidden"

                    }}>
    
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full max-w-full flex-1 overflow-hidden"></div>
        </div>

        {/* <CodeBlock code={`console.log("what's up G?")`} /> */}
      </div>
    </div>
  );
};

export default page;
