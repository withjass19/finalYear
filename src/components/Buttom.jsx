import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Buttom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='py-20' ref={ref}>
      {/* <h1>Hekko</h1> */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-12'>
          <div 
            className='col-span-6 flex justify-center items-center'
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
          >
            <div className="h-[500px] w-[380px] bg-red-500 bg-[url('/assets/images/girl.jpg')] bg-cover"></div>
          </div>
          <div className='col-span-6 flex flex-col justify-center px-20'>
            <p
              className='text-6xl mb-[8%]'
              style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
              }}
            >Make a Books Your Best Friend Via Us</p>
            <p 
              className='mb-[2%]'
              style={{
                transform: isInView ? "none" : "translateX(-300px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
              }}
            >Are you a college student upset with the increasing number of used books after each new semester, or are you a regular book reader who, after reading the books, keeps the old books on the bookshelves or in a cupboard and forgets them? If yes, then ReRead is just made for you!</p>
          </div>
      </div>
    </div>
  )
}
