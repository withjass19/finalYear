'use client'
import React from 'react'
import NavBar from '@/components/Nav';

export default function Jass() {
  return (
    <div>
      <NavBar/>
      <div className='flex justify-center items-center h-[80vh] w-[90vw]'>
        <div>
          <p className='text-8xl font-bold'>Home</p>
        </div>
      </div>
    </div>
  )
}
