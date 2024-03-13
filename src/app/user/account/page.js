'use client'
import Nav from '@/components/NavBar'
import React from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { MdPhotoCamera } from "react-icons/md";
import Dashboard_Nav_Bar from '@/components/Dashboard_Nav_Bar';
import Image from 'next/image';

export default function Account() {
  return (
    <div>
      <Nav/>

      <div className='bg-red-200 w-[100%] h-[100%] grid grid-cols-12' >
        <div className='bg-black col-span-2'>
          <Dashboard_Nav_Bar/>
        </div>
        <div className='col-span-10 bg-slate-100 flex flex-col gap-4 p-8'>
          <div className='text-3xl font-semibold'>
            <p>Account Settings</p>
          </div>

          {/* <div className="bg-white rounded-lg drop-shadow-lg">
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
          </div> */}

          <div className='grid grid-cols-12 grid-rows-1'>
            <div className='bg-red-400 col-span-2'>
                <div className='bg-red-200 p-2'>
                    <div className='flex items-center bg-red-00 rounded-lg border-black border-[2px] hover:bg-gray-700 hover:border-gray-500 hover:border-[2px]'>
                        <RiUser3Line />
                        My Profile
                    </div>
                    <div className='flex items-center bg-red-00 rounded-lg border-white border-[2px] hover:bg-gray-700 hover:border-white hover:text-white hover:border-[2px]'>
                        <RiUser3Line />
                        Change Password
                    </div>
                </div>
            </div>
            <div className='bg-red-300 col-span-10 p-2'>
                <div id="gernal_info">
                    <p className='text-xl font-medium'>Gernal information</p>
                    <div className='flex flex-row items-center'>
                      {/* image */}
                      <div className='flex justify-center w-[100%]'>
                        <Image className='rounded-full' src="/assets/images/user.jpg" width={150} height={150} alt='user'/>
                        <div className='shape backdrop-blur-md w-[150px] h-[150px] rounded-full absolute z-0'></div>
                        <MdPhotoCamera className='text-xl text-white/75 absolute z-10 top-[19.8rem]'/>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}