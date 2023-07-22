"use client";
// If using hooks

import React from 'react'
export default function MyVideo({videoUrl, }){

  return (
    <div className='max-w-[500px] hidden sm:block'>
      <iframe mute={1} width="460" height="315" src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

