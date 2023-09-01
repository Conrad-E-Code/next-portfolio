import React from 'react'
import Link from 'next/link'

const MyLink = ({content}) => {
  return (
    <Link href={content}><div className='underline text-blue-600 p-1 hover:bg-white/50 rounded-md'>
        {content}
    </div>
    </Link>
    
  )
}

export default MyLink