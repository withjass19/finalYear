'use client'
import React, { useState } from 'react';
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { EyeFilledIcon } from '@/components/icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/EyeSlashFilledIcon';

export default function SignIn() {
    const router = useRouter()

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
        const response = await axios.post('/api/users/signin', formData);
        console.log(response.data);
        // Optionally, redirect the user to another page after successful sign-up
        router.push('/profile')
        // if(success === true){
        //     router.push('/profile')
        // }
      } catch (error) {
        console.error('Sign-up error:', error);
        // Handle error (e.g., display error message to the user)
      }
    }

  return (
    <div class="bg-[url('/assets/images/bg.png')] h-[100vh] w-full flex justify-center items-center">
       <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="text-center mb-7">
                <p className="text-2xl font-bold p-4 pb-2">Welcome Back To RERead!</p>
                <p className="text-sm px-9">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col px-9 mx-5 pb-9">
                {/* <Input className="mb-3" type="text" variant="underlined" label="Username" placeholder="Enter your username" /> */}
                <Input className="mb-3" type="email" name="email" variant="underlined" label="Email Address" placeholder="Enter your email" value={formData.email}
                  onChange={handleChange} required/>
                {/* <Input className="mb-3" type="text" variant="underlined" label="Phone Number" placeholder="Enter your phone number" /> */}
                <Input 
                  className="mb-7" 
                  variant="underlined" 
                  label="Password" 
                  placeholder="Enter password" 
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="mb-7 text-end">
                    <span className="text-sm font-medium text-blue-500 cursor-pointer">
                        <Link href="/sign-in/forgot-password">Forgot Password?</Link>
                    </span>
                </div>
                <Button type='submit' className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9">Sign In</Button>
                <div className="text-center">
                    <span className="text-sm text-gray-500">You have not an account ? </span>
                    <span className="font-medium text-gray-600 hover:text-black cursor-pointer">
                        <Link href="/sign-up"> Sign Up</Link>
                    </span>
                </div>
            </form>
       </div>
    </div>
  )
}