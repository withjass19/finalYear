import Nav from '@/components/NavBar'
import Image from 'next/image';
import React from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import {Tooltip, Button} from "@nextui-org/react";
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';
import Dashboard_Nav_Bar from '@/components/Dashboard_Nav_Bar';

export default function Profile() {
  return (
    <div>
      <Nav/>
      <div className='bg-red-200 w-[100%] h-[100%] grid grid-cols-12'>
        <div className='bg-black col-span-2'>
          <Dashboard_Nav_Bar/>
        </div>
        <div className='col-span-10 bg-slate-100 flex flex-col gap-4 p-8'>
          <div className='text-3xl font-semibold'>
            <p>Profile</p>
          </div>

          <div className="bg-white rounded-lg drop-shadow-lg">
            <div className='h-[230px] relative bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg'></div>
            <div className='flex flex-col items-center pb-20'>
              <div className='bg-slate-50/50 w-[175px] h-[175px] flex justify-center items-center rounded-full backdrop-blur-sm relative -top-24'>
                <Image className='rounded-full' src="/assets/images/user.jpg" width={150} height={150} alt='user'/>
              </div>
              <div className='text-center mt-3 absolute top-80'>
                <p className='text-2xl font-semibold'>Name</p>
                <p className='text-gray-400 font-medium'>@UserName</p>
                <button className='bg-black text-white font-medium py-1.5 px-10 rounded-lg border-black border-[2px] hover:text-black hover:bg-white mt-5'>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}