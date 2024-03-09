import Link from 'next/link'
import React from 'react'
import Nav from '@/components/NavBar'
import Image from 'next/image'

export default function Books() {
  return (
    <div>
      <Nav/>
      <h1>Hello</h1>

      <div className='bg-red-500 flex justify-center items-center p-10 pt-5'>
        <div className='flex gap-10'>
          <div className='text-center w-[110px]'>
          <Image src="/assets/images/school.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>College Books</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/school.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>Exam Preparation</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/reading.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>Reading Books</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/school.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>School Books (upto 12th)</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/view-all.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>View All Second Hand books</p>
          </div>
        </div>
      </div>


      <Link href="/books/view-all">Books</Link>
    </div>
  )
}