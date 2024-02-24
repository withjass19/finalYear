'use client'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import {Card, CardBody} from "@nextui-org/react";

export default function HowWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className='py-20' ref={ref}>
      {/* <h1>Hekko</h1> */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-12'>
          <div className='col-span-6 flex justify-center items-center'>
            <div className='grid grid-cols-1 grid-rows-3 gap-12 px-44'>
                <Card
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3.5s"
                  }}
                >
                    <CardBody className='p-5'>
                        <p className='font-medium mb-2'>Search Book</p>
                        <p className='text-sm'>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                </Card>
                <Card
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s"
                  }}
                >
                    <CardBody className='p-5'>
                        <p className='font-medium mb-2'>Contect with buyer</p>
                        <p className='text-sm'>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                </Card>
                <Card 
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s"
                  }}
                >
                    <CardBody className='p-5'>
                        <p className='font-medium mb-2'>Reseve book and pay.</p>
                        <p className='text-sm'>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                </Card>
            </div>
          </div>
          <div 
            className='col-span-6 flex flex-col'
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
          >
            <p className='mb-[2%] text-4xl'>How Its work</p>
            <p className='mb-[7%] pe-32'>Are you a college student upset with the increasing number of used books after each new semester, or are you a regular book reader who, after reading the books, keeps the old books on the bookshelves or in a cupboard and forgets them? If yes, then ReRead is just made for you!</p>
            <div className="h-[400px] w-[380px] bg-red-500 bg-[url('/assets/images/work.jpg')] bg-cover flex"></div>
          </div>
      </div>
    </div>
  )
}
