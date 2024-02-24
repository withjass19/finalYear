'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function page() {
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden bg-slate-950'>
      <motion.section 
        variants={{
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.25,
                }
            }
        }} 
        initial="hiiden"
        animate="show"  
        className='grid grid-cols-3 p-10 gap-10'
    >
        <motion.div
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
            variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
        ></motion.div>
        <motion.div
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
            variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
        ></motion.div>
        <motion.div
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
            variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
        ></motion.div>
        {/* <motion.div
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
            variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
        ></motion.div>
        <motion.div
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
            variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
        ></motion.div>
        <motion.div
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
            variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
        ></motion.div> */}
        <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
        <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
        <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      </motion.section>
    </div>
  )
}
