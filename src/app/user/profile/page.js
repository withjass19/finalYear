'use client'
import Nav from '@/components/NavBar'
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import {Input, Button} from "@nextui-org/react";
import Link from 'next/link';
import Dashboard_Nav_Bar from '@/components/Dashboard_Nav_Bar';
import { EyeSlashFilledIcon } from '@/components/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/icons/EyeFilledIcon';

export default function Profile() {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Value ko update karne ke liye ek function banae
  const handleChange = (e) => {
    setValue(e.target.value);
  };
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

          <div className='text-3xl font-semibold py-5'>
            <p>Gernal information</p>
          </div>

          <div className='bg-white rounded-lg drop-shadow-lg'>
            <form className="flex flex-col px-9 mx-5 pb-9">
              <Input
                key="outside-left"
                type="text"
                label="Username"
                labelPlacement="outside-left"
                placeholder="Enter your username"
                value={value}
                onChange={handleChange}
              />
              <Input
                key="outside-left"
                type="email"
                label="Email"
                labelPlacement="outside-left"
                placeholder="Enter your email"
              />
              <Input
                key="outside-left"
                type="text"
                label="Phone"
                labelPlacement="outside-left"
                placeholder="Enter your username"
              />                           
              {/* <Input className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9" type="submit" value="Sign Up"></Input> */}
              <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Update</Button>
            </form>
          </div>

          <div className='text-3xl font-semibold py-5'>
            <p>Change Password</p>
          </div>

          <div className='bg-white rounded-lg drop-shadow-lg'>
            <form className="flex flex-col px-9 mx-5 pb-9">
            <Input 
                  className="mb-3" 
                  variant="underlined" 
                  label="Current Password" 
                  placeholder="Enter current password" 
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  name="password"
                  required
                />
              <Input 
                  className="mb-3" 
                  variant="underlined" 
                  label="New Password" 
                  placeholder="Enter new password" 
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  name="password"
                  required
                />                       
              {/* <Input className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9" type="submit" value="Sign Up"></Input> */}
              <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Update</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}