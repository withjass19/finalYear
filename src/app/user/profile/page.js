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

export default function Profile() {
  return (
    <div>
      <Nav/>
      <div className='bg-red-200 w-[100%] h-[100%] grid grid-cols-12'>
        <div className='bg-black col-span-3'>
          <div className="flex flex-col gap-1.5 text-xl text-white px-10 py-5">
              <Link href="/user/dashboard">
                <div className='flex items-center gap-5 bg-red-00 py-3 px-5 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                    <AiOutlineAppstore />
                    Deshboard
                </div>
              </Link>
              <Link href="/user/profile">
                <div className='flex items-center gap-5 bg-red-00 py-3 px-5 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                    <RiUser3Line />
                    Profile
                </div>
              </Link>
            <div className='flex items-center gap-5 bg-red-00 py-3 px-5 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
              <TbMessageCircle2 />
              Message
            </div>
          </div>
        </div>
        <div className='col-span-9 bg-slate-100 flex flex-col gap-4 p-8'>
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