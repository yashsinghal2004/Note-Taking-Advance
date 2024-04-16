import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col min-h-full'>
      <div className='flex flex-col items-center justify-center md:justify-start
      text-center gap-y-8 flex-1 px-6 pb-10'>
        <Heading/>
      </div>
    </div>
  )
}

export default page
