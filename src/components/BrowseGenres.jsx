'use client'
import React from 'react'
import BookCard1 from './BookCard1'
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function BrowseGenres() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <div className='bg-black text-white'>
      {/* <h1>Hello</h1> */}
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col py-20'>
            <div className='text-3xl text-center py-7'>
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                        ease: [0.17, 0.55, 0.55, 1]
                    }}
                >
                    <span className='bg-sky-300 ps-5 px-3 rounded-full'>Browse </span>
                    <span className='ps-2'>genres</span>
                </motion.div>
            </div>
            <div className="grid grid-cols-6 grid-rows-1 text-center mx-48 mt-9" ref={ref}>
                <div 
                    className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }}
                >Novels</div>
                <div 
                    className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                    }}
                >Historical</div>
                <div 
                    className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                    }}
                >Prepration</div>
                <div 
                    className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                    }}
                >Literatur</div>
                <div 
                    className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                    }}
                >Fiction</div>
                <div 
                    className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                    }}
                >Others</div>
            </div>
            <div className='my-12 text-center grid grid-cols-6 grid-rows-2 gap-8'>
                <div
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
                    }}
                >
                    <BookCard1
                        bookName ="Political theory II"
                        amount= "2"
                        image = "/assets/images/books/1.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s"
                }}
                >
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/2.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/3.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/4.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.2s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/5.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.4s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/6.jpg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.6s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/7.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.8s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/8.png"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/9.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3.2s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/10.jpg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3.4s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/11.jpeg"
                    />
                </div>
                <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3.6s"
                }}>
                    <BookCard1
                    bookName ="Action"
                    amount= "2"
                    image = "/assets/images/books/12.jpg"
                    />
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <div className='border-[2px] border-white hover:text-black hover:bg-white rounded-full mx-4 p-1.5 w-[200px] text-center'>More</div>
            </div>
        </div>
      </div>
    </div>
  )
}