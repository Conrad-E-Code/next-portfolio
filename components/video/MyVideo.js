"use client";
// If using hooks

import React from 'react'
export default function MyVideo({videoUrl}){

  return (
    <div className='iframe-container'>
      <iframe mute={1} src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

