'use client'
import React, { useState, useEffect } from 'react';
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { EyeFilledIcon } from '@/components/icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/EyeSlashFilledIcon';

export default function SignUp() {
  const router = useRouter()

  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const validateValues = (inputValues) => {
    const errors = {};

    // Validate username
    if (formData.username.trim() === '') {
      // Display error message for username
      errors.username = 'Username is required';
      // console.error(errors.username);
      // return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      // Display error message for email
      errors.email = 'Invalid email address';
      // console.error('Invalid email address');
      // return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/; // Adjust regex according to your phone number format
    if (!phoneRegex.test(formData.phoneNumber)) {
      // Display error message for phone number
      errors.phoneNumber = 'Invalid phone number';
      // console.error('Invalid phone number');
      // return;
    }

    // Validate password
    if (formData.password.length < 6) {
      // Display error message for password
      errors.password = 'Password must be at least 6 characters long';
      // console.error('Password must be at least 6 characters long');
      // return;
    }
    return errors;
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setErrors(validateValues(formData));
    setSubmitting(true);

    try {
      const response = await axios.post('/api/users/signup', formData);
      // console.log(response.data);
      // Optionally, redirect the user to another page after successful sign-up
      router.push('/sign-in')
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle error (e.g., display error message to the user)
    }
  }
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && submitting) {
  //       console.log(formData);
  //   }
  // }, [errors]);
  
  return (
    <div class="bg-[url('/assets/images/bg.png')] bg-no-repeat h-[100vh] w-full flex justify-center items-center">
       <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="text-center mb-7">
                <p className="text-2xl font-bold p-4 pb-2">Welcome To RERead!</p>
                <p className="text-sm px-9">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col px-9 mx-5 pb-9">
                <Input 
                  className="mb-3" 
                  type="text" 
                  variant="underlined" 
                  label="Username" 
                  placeholder="Enter your username" 
                  name="username"
                  // color="danger"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username ? (<p className="text-red-500 text-sm">{errors.username}</p>) : null}
                <Input 
                  className="mb-3" 
                  type="email"
                  variant="underlined" 
                  label="Email Address" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email ? (<p className="text-red-500 text-sm">{errors.email}</p>) : null}
                <Input 
                  className="mb-3" 
                  type="text" 
                  variant="underlined" 
                  label="Phone Number" 
                  placeholder="Enter your phone number" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />  
                {errors.phoneNumber ? (<p className="text-red-500 text-sm">{errors.phoneNumber}</p>) : null}                            
                <Input 
                  className="mb-3" 
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
                {errors.password ? (<p className="text-red-500 text-sm p-0 m-0">{errors.password}</p>) : null}
                {/* <Input className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9" type="submit" value="Sign Up"></Input> */}
                <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Sign Up</Button>
                <div className="text-center">
                    <span className="text-sm text-gray-500">Already have an account ? </span>
                    <span className="font-medium text-gray-600 hover:text-black cursor-pointer">
                        <Link href="/sign-in"> Sign in</Link>
                    </span>
                </div>
            </form>
       </div>
    </div>
  )
}
