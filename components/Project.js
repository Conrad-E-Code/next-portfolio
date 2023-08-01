import React from 'react'
import Image from 'next/image'
import MyVideo from './video/MyVideo'
import { useState } from 'react'
import Colors from '/constants/colors'
import { useContext } from 'react'
import { Context } from '/context/Context'


const Project = ({name, headline, details, videoUrl}) => {
    const { textClr} = useContext(Context);
const [showDetails, setShowDetails] = useState(false)
function handleShowDetails(){
    setShowDetails(!showDetails)
}

  return (
    <div style={{color: Colors[textClr]}} className='flex flex-col items-center'>
        <div onClick={handleShowDetails} className='bg-primaryColor/60 w-[85vw] flex flex-col items-center'>
            <div className='bg-accentColorB flex justify-center w-[45vw] mt-5 rounded text-xl font-semibold'>{name}
            </div>
            <MyVideo videoUrl={videoUrl}/>
            <div className='bg-accentColorB flex justify-center font-semibold w-[45vw] mt-1 rounded bg-opacity-60'>{headline}
            </div>
            {showDetails && <div className='bg-accentColorB flex justify-center font-semibold w-[45vw]' >{details}</div>}
        </div>
    </div>
  )
}

export default Project