"use client";
// If using hooks
import React from 'react'
export default function MyVideo(){
  return (
    <div className='max-w-[500px]'>
      <iframe mute={1} width="460" height="315" src="https://www.youtube-nocookie.com/embed/_oqQ0xwN3gE?autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      {/* <ReactPlayer playing={true} loop={true} url='https://www.youtube.com/embed/_oqQ0xwN3gE'/> */}
    </div>
  )
}

