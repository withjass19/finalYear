'use client'
import React from 'react'
import Link from 'next/link';
import { MdArrowForwardIos } from "react-icons/md";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div className='max-w-screen-xl mx-auto py-5' id='hero'>
        <div className="grid grid-cols-2" ref={ref}>
            <div className='flex flex-col justify-start pt-28'>
                <p 
                  className='text-5xl font-black tracking-wider ps-16 mb-5'
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                  }}
                >
                  The best place to Sell & Buy SecondHand Books.
                </p>

                <p 
                  className='ps-16 mb-12'
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore eum temporibus sunt tenetur reiciendis, porro impedit debitis facere minus?
                </p>
                <Link 
                  href="/books"
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                  }}
                >
                  <button className='border-[2px] border-black font-medium text-black hover:bg-black hover:text-white text-center px-6 py-3 rounded-full w-[200px] ms-16'>Find more books</button>
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center py-9 ps-16'>
                <div 
                  className='flex justify-center items-center font-medium relative z-50 top-20 left-32 p-2 rounded-lg backdrop-blur-lg bg-black/5'
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                  }}
                >
                    <div className='w-[30px] h-[30px] bg-green-400'></div>
                    {/* image */}
                    <div className='mx-2'>
                        <p className='text-sm'>Book Name</p>
                        <p className='text-xs'>200+ books</p>
                    </div>
                    <MdArrowForwardIos />
                </div>

                <div 
                  className="bg-yellow-300 h-[400px] w-[300px] rounded-ss-3xl rounded-br-3xl bg-[url('/assets/images/book-reader.jpeg')] bg-cover"
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                  }}
                ></div>

                <div 
                  className='flex justify-center items-center font-medium relative -top-9 right-32 p-2 rounded-lg backdrop-blur-lg bg-black/5'
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                  }}
                >
                    <div className='w-[30px] h-[30px] bg-green-400'></div>
                    {/* image */}
                    <div className='mx-2'>
                        <p className='text-sm'>Book Name</p>
                        <p className='text-xs'>200+ books</p>
                    </div>
                    <MdArrowForwardIos />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
