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
            className='col-span-7 flex flex-col justify-center'
            style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                  }}
          >
            <p className='text-md font-semibold text-slate-400'>ABOUT</p>
            <p className='text-3xl font-extrabold mb-[4%]'>ReRead - A Student-to-Student Bookstore</p>
            <p className='mb-[2%] text-slate-200'>Are you a college student upset with the increasing number of used books after each new semester, or are you a regular book reader who, after reading the books, keeps the old books on the bookshelves or in a cupboard and forgets them? If yes, then ReRead is just made for you!</p>
            <p className='mb-[2%] text-slate-200'>ReRead is Indias leading platform where you can sell used books online. At ReRead, we help people to sell their used books to other book lover just like them at interesting prices</p>
            <p className='mb-[2%] text-slate-200'>Selling and buying books on ReRead is a win-win situation for both the buyer and the seller. How? Lets see. As a seller, you can earn a good amount of money by selling your old books (which you dont even need) to another person at good prices. And being a buyer, you can save some money by buying second-hand books directly from the book owner.</p>
            <p className='mb-[2%] text-slate-200'>Selling used second-hand books at your own desired price is not an uphill battle anymore. Just sell them on ReRead!</p>
          </div>
      </div>
    </div>
  )
}
