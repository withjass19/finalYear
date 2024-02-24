import React from 'react'

export default function Buttom() {
  return (
    <div className='py-20'>
      {/* <h1>Hekko</h1> */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-12'>
          <div className='col-span-6 flex justify-center items-center'>
            <div className="h-[500px] w-[380px] bg-red-500 bg-[url('/assets/images/girl.jpg')] bg-cover"></div>
          </div>
          <div className='col-span-6 flex flex-col justify-center px-20'>
            <p className='text-6xl mb-[8%]'>Make a Books Your Best Friend Via Us</p>
            <p className='mb-[2%]'>Are you a college student upset with the increasing number of used books after each new semester, or are you a regular book reader who, after reading the books, keeps the old books on the bookshelves or in a cupboard and forgets them? If yes, then ReRead is just made for you!</p>
          </div>
      </div>
    </div>
  )
}
