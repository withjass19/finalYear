import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    // <div className="">
      <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        {/* <div className='text-center'> */}
            <p className='text-9xl text-border-black text-transparent font-black py-8'>404</p>
            <p className='text-4xl font-bold py-2.5'>ReRead</p>
            <p className='pb-7'>This page does not exist. Please go back to the homepage or contact us if you think this is an error.</p>
            <Link href="/" className='border-black border-[2px] py-2 px-10 rounded-full hover:bg-black hover:text-white font-medium'>Back To Home</Link>
        {/* </div> */}
      </div>
    // </div>
  )
}
