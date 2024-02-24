'use client'
import React, { useEffect, useState } from 'react'
import {Input, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignUp() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
      let errors = {};
      if (inputValues.email.length < 15) {
        errors.email = "Email is too short";
      }
      if (inputValues.password.length < 5) {
        errors.password = "Password is too short";
      }
      return errors;
    };

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
        setErrors(validateValues(formData));
        setSubmitting(true);
        try {
          await axios.post('/api/jass/sign-up', formData);
          // console.log(response.data);
          router.push('/jass/sign-in')
          // Optionally, redirect the user to another page after successful sign-up
        } catch (error) {
          console.error('Sign-up error:', error);
          // Handle error (e.g., display error message to the user)
        }
      };
  return (
    <div>
      <h1>Sign Up</h1>
      <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-gray-100'>
            <div className='backdrop-blur-lg bg-white rounded-3xl shadow-md'>
                <form method='POST' onSubmit={handleSubmit} className='grid grid-rows-2 gap-4 p-10'>
                    <Input type="email" name='email' label="Email" variant="bordered" value={formData.email} onChange={handleChange} required />
                    {errors.email ? (
  <p className="error">
    Email should be at least 15 characters long
  </p>
) : null}
                    <Input type="password" label="Password" name='password' variant="bordered" value={formData.password} onChange={handleChange} required/>
                    {errors.password ? (
  <p className="error">
    Password should be at least 5 characters long
  </p>
) : null}
                    <Button type='submit' className="border-black text-black hover:text-white hover:bg-black rounded-lg bg-white border-[2px]">
                        Ghost
                    </Button> 
                </form>
            </div>
        </div>
    </div>
  )
}
