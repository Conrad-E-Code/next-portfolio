import React from 'react'

const Video = () => {
  return (
    <div>Video
        <video autoPlay loop style={{width: "500px", height: "500px"}} >
            <source src="https://www.youtube.com/embed/_oqQ0xwN3gE" type="video/mp4"/>
        </video>

    </div>
  )
}

export default Video