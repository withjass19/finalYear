'use client'
import Nav from '@/components/NavBar'
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react'
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
import axios from 'axios';

export default function Profile() {
  const fileInputRef = useRef(null);

  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [newPswd, setNewPswd] = useState('');
  const [currentPswd, setCurrentPswd] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const [imageURL, setImageURL] = useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Value ko update karne ke liye ek function banae
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitChangePassword = async (e) =>{
    e.preventDefault();
    const formData = new FormData();

    formData.set('current_password', currentPswd);
    formData.set('new_password', newPswd);

    const token = localStorage.getItem('token');
    // console.log('Token:', localStorage.getItem('token'));
    formData.set('token', token);
    try {
      const response = await axios.post('/api/dashbord/profile/changePassword', formData);
      // console.log(response.data);
      
      // Optionally, redirect the user to another page after successful sign-up
      // router.push('/profile')
      // if(success === true){
      //     router.push('/profile')
      // }
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle error (e.g., display error message to the user)
    }
  }

  useEffect(() => {
    const fetchUserImageFromBackend = async () => {
      try{
        const formData = new FormData();
  
        const token = localStorage.getItem('token');
        // console.log('Token:', localStorage.getItem('token'));
        formData.set('token', token);
        // Example fetch function, replace with your actual fetch logic
        const response = await axios.post('/api/dashbord/profile/profileImage', formData);
        // console.log('Profile Data successfully:', response.data);
        setImageURL(response.data.url);
      }catch{
        console.log("error")
        // setImageURL('http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png');
      }      
    };
    fetchUserImageFromBackend();
    // Fetch initial value from the backend
    const fetchDefaultValueFromBackend = async () => {
      const formData = new FormData();
  
      const token = localStorage.getItem('token');
      // console.log('Token:', localStorage.getItem('token'));
      formData.set('token', token);
      // Example fetch function, replace with your actual fetch logic
      const response = await axios.post('/api/dashbord/profile/generalIinformation', formData);
      // console.log('Data sent successfully:', response.data);
      // console.log('Data successfully:', response.data.user.username);
      setUsername(response.data.user.username);
      setEmail(response.data.user.email);
      setPhoneNo(response.data.user.phoneNo);
    };
    fetchDefaultValueFromBackend();
  }, []);

  const handleButtonClick = () => {
    // Trigger the click event of the file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    
    try {
      // Create a FormData object and append the file to it
      const formData = new FormData();
      formData.append('image', file);

      const token = localStorage.getItem('token');
      // console.log('Token:', localStorage.getItem('token'));
      formData.set('token', token);

      // Make a POST request to the backend endpoint to upload the image
      const response = await axios.post('/api/dashbord/profile/imageUpload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
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
                {/* <Image className='rounded-full' src="/assets/images/user.jpg" width={150} height={150} alt='user'/> */}
                <Image className='rounded-full' src={imageURL} width={150} height={150} alt='user'/>
              </div>
              <div className='text-center mt-3 absolute top-80'>
                <p className='text-2xl font-semibold'>{username}</p>
                <p className='text-gray-400 font-medium'>@{username}</p>
                <div>
                  <input ref={fileInputRef} type="file" accept="image/*" className='hidden' onChange={handleFileInputChange}/>
                  <button className='bg-black text-white font-medium py-1.5 px-10 rounded-lg border-black border-[2px] hover:text-black hover:bg-white mt-5' onClick={handleButtonClick}>Upload image</button>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-12 grid-rows-1 pt-5 gap-10'>
            <div className='col-span-6 bg-white rounded-lg drop-shadow-lg flex flex-col justify-center'>
              <div className='text-3xl font-semibold pb-5 pt-10 px-12'>
                <p>General information</p>
              </div>
              <form className="flex flex-col px-12 pb-9 gap-5">
              <Input 
                  className="mb-3" 
                  type="text" 
                  variant="underlined" 
                  label="Username" 
                  // placeholder="Enter your username" 
                  name="username"
                  // color="danger"
                  // defaultValue= { username }
                  value={username}
                  // onChange={handleChange}
                  // required
                />
                <Input 
                  // isDisabled
                  className="mb-3" 
                  type="email"
                  variant="underlined" 
                  label="Email Address" 
                  placeholder="Enter your email" 
                  name="email"
                  value={email}
                />
                <Input
                  // isDisabled
                  className="mb-3" 
                  type="text" 
                  variant="underlined" 
                  label="Phone Number" 
                  placeholder="Enter your phone number" 
                  name="phoneNumber"
                  value={phoneNo}
                />                         
                {/* <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Update</Button> */}
              </form>
            </div>
            <div className='col-span-6 bg-white rounded-lg drop-shadow-lg flex flex-col gap-10'>
              <div className='text-3xl font-semibold px-12 pt-12'>
                <p>Change Password</p>
              </div>
              <form onSubmit={handleSubmitChangePassword} className="flex flex-col px-9 mx-5 pb-9 gap-10">
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
                  name="current_password"
                  value={currentPswd}
                  onChange={(e) => setCurrentPswd(e.target.value)}
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
                  name="new_password"
                  value={newPswd}
                  onChange={(e) => setNewPswd(e.target.value)}
                  required
                />                       
              <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Update</Button>
            </form>
            </div>
          </div>

          {/* <div className='text-3xl font-semibold py-5'>
            <p>Gernal information</p>
          </div> */}

          {/* <div className='bg-white rounded-lg drop-shadow-lg'>
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
              <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Update</Button>
            </form>
          </div> */}

          {/* <div className='text-3xl font-semibold py-5'>
            <p>Change Password</p>
          </div> */}

          {/* <div className='bg-white rounded-lg drop-shadow-lg'>
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
              <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9 mt-7" type="submit">Update</Button>
            </form>
          </div> */}

        </div>
      </div>
    </div>
  )
}