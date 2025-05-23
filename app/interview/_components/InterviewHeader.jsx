import Image from 'next/image'
import React from 'react'

const InterviewHeader = () => {
  return (
    <div className='p-4 shadow-sm'>
        <Image src={"/logo.png"} alt='logo' height={100} width={200} className='w-[150px]'/>
    </div>
  )
}

export default InterviewHeader