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
import axios from 'axios';
import Dashboard_Nav_Bar from '@/components/Dashboard_Nav_Bar';

export default function Deshboard() {

  const [postData, setpostData] = useState([]);
  const [data, setData] = useState(false);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchUserImageFromBackend = async () => {
      try{
        const formData = new FormData();
  
        const token = localStorage.getItem('token');
        console.log('Token:', localStorage.getItem('token'));
        formData.set('token', token);
        // Example fetch function, replace with your actual fetch logic
        const response = await axios.post('/api/dashbord/profile/profileImage', formData);
        console.log('Profile Data successfully:', response.data);
        setImageURL(response.data.url);
      }catch{
        console.log("error")
        // setImageURL('http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png');
      }      
    };
    fetchUserImageFromBackend();


    const fetchData = async () => {
      try {
        const formData = new FormData();
        // Get the token from local storage
        const token = localStorage.getItem('token');
        console.log('Token:', localStorage.getItem('token'));
        formData.set('token', token);
        const response = await axios.post('/api/dashbord/postData', formData);
        console.log('Data sent successfully:', response.data);
        setData(true)
        setpostData(response.data.message)
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };
    fetchData();
    
  }, []);
  return (
    <div>
      <Nav/>

      <div className='bg-red-200 w-[100%] h-[100%] grid grid-cols-12' >
        <div className='bg-black col-span-2'>
          <Dashboard_Nav_Bar/>
        </div>
        <div className='col-span-10 bg-slate-100 flex flex-col gap-4 p-8 px-20'>
          <div className='text-3xl font-semibold'>
            <p>Profile</p>
          </div>

          <div className="bg-white rounded-lg drop-shadow-lg">
            <div className='h-[230px] relative bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg'></div>
            <div className='flex flex-col items-center pb-20'>
              <div className='bg-slate-50/50 w-[175px] h-[175px] flex justify-center items-center rounded-full backdrop-blur-sm relative -top-24'>
                <Image className='rounded-full' src={imageURL} width={150} height={150} alt='user'/>
              </div>
              <div className='text-center mt-3 absolute top-80'>
                <p className='text-2xl font-semibold'>Name</p>
                <p className='text-gray-400 font-medium'>@UserName</p>
                <button className='bg-black text-white font-medium py-1.5 px-10 rounded-lg border-black border-[2px] hover:text-black hover:bg-white mt-5'>Edit</button>
              </div>
            </div>
          </div>

          <div className='pt-6'>
            <p className='text-3xl font-semibold '>Library</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.</p>
          </div>

          {/* <div className="bg-red-00">
            <div class="relative overflow-x-auto shadow-lg sm:rounded-lg">
                <table class="w-full text-md text-left rtl:text-right text-gray-500">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              <Tooltip color="default" content="Post" className="capitalize bg-black text-white">
                                <IoEyeOutline className="text-gray-400" />
                              </Tooltip>
                              <Tooltip color="primary" content="Edit" className="capitalize">
                                <RiEditLine className="text-sky-500" />
                              </Tooltip>
                              <Tooltip color="danger" content="Delete" className="capitalize">
                                <MdDeleteOutline className="text-red-500" />
                              </Tooltip>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              <Tooltip color="default" content="Post" className="capitalize bg-black text-white">
                                <IoEyeOutline className="text-gray-400" />
                              </Tooltip>
                              <Tooltip color="primary" content="Edit" className="capitalize">
                                <RiEditLine className="text-sky-500" />
                              </Tooltip>
                              <Tooltip color="danger" content="Delete" className="capitalize">
                                <MdDeleteOutline className="text-red-500" />
                              </Tooltip>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              <Tooltip color="default" content="Post" className="capitalize bg-black text-white">
                                <IoEyeOutline className="text-gray-400" />
                              </Tooltip>
                              <Tooltip color="primary" content="Edit" className="capitalize">
                                <RiEditLine className="text-sky-500" />
                              </Tooltip>
                              <Tooltip color="danger" content="Delete" className="capitalize">
                                <MdDeleteOutline className="text-red-500" />
                              </Tooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div> */}



          <div className="bg-red-00">
            <div class="relative overflow-x-auto shadow-lg sm:rounded-lg">
                <table class="w-full text-md text-left rtl:text-right text-gray-500">
                    <thead class="text-sm text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {!data ? (
                      <tbody>
                        <tr>
                          <td className='text-center px-6 py-12' colSpan="5">No Data...</td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {postData.map(books => (
                        <tr key={books._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {books.bookName}
                          </th>
                          <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              {/* <Tooltip color="default" content="Post" className="capitalize bg-black text-white absolute"> */}
                                <IoEyeOutline className="text-gray-400" />
                              {/* </Tooltip> */}
                              {/* <Tooltip color="primary" content="Edit" className="capitalize"> */}
                                <RiEditLine className="text-sky-500" />
                              {/* </Tooltip> */}
                              {/* <Tooltip color="danger" content="Delete" className="capitalize"> */}
                                <MdDeleteOutline className="text-red-500" />
                              {/* </Tooltip> */}
                            </td>
                        </tr>
                      ))}
                      </tbody>
                    )}


                    {/* <tbody> */}
                      {/* {postData.map(books => (
                        <tr key={books._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {books.bookName}
                          </th>
                          <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                                <IoEyeOutline className="text-gray-400" />
                                <RiEditLine className="text-sky-500" />
                                <MdDeleteOutline className="text-red-500" />
                            </td>
                        </tr>
                      ))} */}
                        {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              <Tooltip color="default" content="Post" className="capitalize bg-black text-white">
                                <IoEyeOutline className="text-gray-400" />
                              </Tooltip>
                              <Tooltip color="primary" content="Edit" className="capitalize">
                                <RiEditLine className="text-sky-500" />
                              </Tooltip>
                              <Tooltip color="danger" content="Delete" className="capitalize">
                                <MdDeleteOutline className="text-red-500" />
                              </Tooltip>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              <Tooltip color="default" content="Post" className="capitalize bg-black text-white">
                                <IoEyeOutline className="text-gray-400" />
                              </Tooltip>
                              <Tooltip color="primary" content="Edit" className="capitalize">
                                <RiEditLine className="text-sky-500" />
                              </Tooltip>
                              <Tooltip color="danger" content="Delete" className="capitalize">
                                <MdDeleteOutline className="text-red-500" />
                              </Tooltip>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4 flex gap-3 text-xl">
                              <Tooltip color="default" content="Post" className="capitalize bg-black text-white">
                                <IoEyeOutline className="text-gray-400" />
                              </Tooltip>
                              <Tooltip color="primary" content="Edit" className="capitalize">
                                <RiEditLine className="text-sky-500" />
                              </Tooltip>
                              <Tooltip color="danger" content="Delete" className="capitalize">
                                <MdDeleteOutline className="text-red-500" />
                              </Tooltip>
                            </td>
                        </tr> */}
                    {/* </tbody> */}
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}