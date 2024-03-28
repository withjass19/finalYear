'use client'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='py-32 bg-black text-white' ref={ref}>
      {/* <h1>Hekko</h1> */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-12'>
          <div 
            className='col-span-5 flex justify-center items-center'
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
          >
            <div className="h-[500px] w-[380px] bg-red-500 bg-[url('/assets/images/about.jpg')] bg-cover"></div>
          </div>
          <div 
            className='col-span-7 flex flex-col justify-center pe-12'
            style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                  }}
          >
            <p className='text-md font-semibold text-slate-400'>ABOUT</p>
            <p className='text-3xl font-extrabold mb-[4%]'>ReRead: Empowering Book Lovers</p>
            <p className='mb-[2%] text-slate-200'>Are you a student troubled by the surplus of used textbooks each semester? Or perhaps you re an avid reader with shelves overflowing with forgotten treasures? Look no further, because ReRead is tailor-made for you!</p>
            <p className='mb-[2%] text-slate-200'>ReRead stands as Indias foremost platform, facilitating the seamless buying and selling of preloved books. As a seller, unlock the potential of your old books by connecting with fellow book enthusiasts and earning attractive prices. And for buyers, indulge in the joy of affordable reading experiences by acquiring second-hand gems directly from the original owners.</p>
            <p className='mb-[2%] text-slate-200'>At ReRead, its a win-win scenario for all. Join us today and rediscover the magic of your library, one page at a time.</p>
            {/* <p className='mb-[2%] text-slate-200'>Selling used second-hand books at your own desired price is not an uphill battle anymore. Just sell them on ReRead!</p> */}
          </div>
      </div>
    </div>
  )
}
