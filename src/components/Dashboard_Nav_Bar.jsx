'use client'
import Nav from '@/components/NavBar'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import {Tooltip, Button} from "@nextui-org/react";
import { IoEyeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Dashboard_Nav_Bar() {
  return (
    <div className="flex flex-col text-lg text-white p-5">
        <Link href="/user/dashboard">
            <div className='flex items-center gap-3 p-2 px-5 bg-red-00 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                <AiOutlineAppstore />
                    Dashboard
                </div>
              </Link>
              {/* <Link href="/user/profile">
                <div className='flex items-center gap-3 p-2 px-5 bg-red-00 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                    <RiUser3Line />
                    Profile
                </div>
              </Link> */}
              <Link href="/user/sell">
                <div className='flex items-center gap-3 p-2 px-5 bg-red-00  rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                    <IoBookOutline />
                    Upload book
                </div>
              </Link>
            {/* <div className='flex items-center gap-3 p-2 px-5 bg-red-00 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
              <TbMessageCircle2 />
              Message
            </div> */}
            <Link href="/user/profile">
              <div className='flex items-center gap-3 p-2 px-5 bg-red-00 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                <IoSettingsOutline />
                Account Setting
              </div>
            </Link>
    </div>
  )
}
