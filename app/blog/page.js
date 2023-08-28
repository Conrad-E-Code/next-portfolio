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
                        <span
                          style={{ fontSize: ".75rem" }}
                          className="truncate"
                        >
                          New Blog
                        </span>
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
    
                        {/* Add onHOver popup to control tooltip */}
                      </a>
                    </div>
                    {/* SKIPPED A COUPLE hidden divs for no chat history options */}
                    <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
                      <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                        <div>
                          <span>
                            <div
                              className="relative"
                              style={{
                                height: "auto",
                                opacity: 1,
                              }}
                            >
                              <div
                                className="sticky top-0 z-16"
                                style={{ opacity: 1, height: "auto" }}
                              >
                                <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900">
                                  Today
                                </h3>
                              </div>
                              {/* BEGIN LIST OF BLOGS HERE */}
                              <ol>{/* Map Today BLogs Here */}</ol>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* Begin main page here */}
          <div className="relative flex h-full max-w-full flex-1 overflow-hidden bg-gray-800">
            <div className="flex h-full max-w-full flex-1 flex-col" >
                <main className="relative h-full w-full transition-width overflow-auto flex-1">
                    <div className="flex h-full">
                        <div className="flex-1 overflow-hidden">
                            <div className="h-full dark:bg-gray-800">
                                {/* SKIP 2 DIVS */}
                                <div className="flex h-full flex-col items-center justify-between pb-64">
                                    {/* Header */}
                                    <div className="align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]">
                                        <h1 className="text-4xl font-semibold text-center text-gray-200/30 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow">
                                            ConRAD
                                        </h1>
                                    </div>


                                </div>


                            </div>

                        </div>


                    </div>
                </main>
            </div>
          </div>
        </div>

        {/* <CodeBlock code={`console.log("what's up G?")`} /> */}
      </div>
    </div>
  );
};

export default page;
