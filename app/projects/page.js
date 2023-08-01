"use client";
import React from 'react'
import Project from '../../components/Project'

const Projects = () => {
  return (
    <div className='pt-16 bg-fixed bg-cover custom-img h-screen'>
        <Project name="React Native App" headline="Click to see details." details="DETAILS" videoUrl="https://www.youtube-nocookie.com/embed/hjBwnxklXGg?autoplay=1&mute=1&loop=1"/>
    </div>
  )
}

export default Projects