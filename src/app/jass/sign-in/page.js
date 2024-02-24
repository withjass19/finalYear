'use client'
import React, { useState } from 'react'
import {Input, Button} from "@nextui-org/react";
import axios from 'axios';

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleSubmit = async e => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/jass');
          console.log(res.data);
          // var myData = res.data;
          // Optionally, redirect the user to another page after successful sign-up
        } catch (error) {
          console.error('Sign-up error:', error);
          // Handle error (e.g., display error message to the user)
        }
      };
  return (
    <div>
      <h1>Sign in</h1>
        <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-gray-100'>
            <div className='backdrop-blur-lg bg-white rounded-3xl shadow-md'>
                <form method='POST' onSubmit={handleSubmit} className='grid grid-rows-2 gap-4 p-10'>
                  {/* <p>{myData}</p> */}
                    <Input type="email" name='email' label="Email" variant="bordered" value={formData.email} onChange={handleChange} required />
                    <Input type="password" label="Password" name='password' variant="bordered" value={formData.password} onChange={handleChange} required/>
                    <Button type='submit' className="border-black text-black hover:text-white hover:bg-black rounded-lg bg-white border-[2px]">
                        Ghost
                    </Button> 
                </form>
            </div>
        </div>
    </div>
  )
}