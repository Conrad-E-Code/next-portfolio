"use client";
import React from 'react'
import CodeBlock from '../../components/CodeBlock'

const page = () => {
  return (
    <div className='py-8 pt-16 bg-chatBackgroundColor'>
        <CodeBlock code={`console.log("what's up G?")`} />
    </div>
  )
}

export default page