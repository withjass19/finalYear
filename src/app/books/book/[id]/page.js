'use client'
import React, { useEffect, useState } from 'react';
import FooterData from '@/components/Footer'
import Nav from '@/components/NavBar'
import {Avatar} from "@nextui-org/react";
import {Skeleton} from "@nextui-org/react";
import Image from 'next/image';
import axios from 'axios';

export default function Book({ params }) {
  const [bookData, setBookData] = useState(null);
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false)
  const [isA, setIsA] = useState(false)

  useEffect(() => {
    // Function to send data to the backend
    const sendDataToBackend = async () => {
      try {
        // Send HTTP POST request to your backend API endpoint
        const response = await axios.post('/api/books/find', params);

        // Update state with the response data from the backend
        setBookData(response.data.result);
        setIsA(true)
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    };

    // Call the function when the component mounts
    sendDataToBackend();

    const userData = async () => {
      try {
        const formData = new FormData();
        const token = localStorage.getItem('token');
        // console.log('Token:', localStorage.getItem('token'));
        formData.set('token', token);
        // Send HTTP POST request to your backend API endpoint
        const response = await axios.post('/api/users/userdata', formData);

        // Update state with the response data from the backend

        // console.log("result",response.data)
        setUser(response.data.userinfo);
        setIsAuth(true)
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    }

    userData()
  }, [params]);
  return (
    <div>
      <Nav/>
      <div>

        {!isA ? (
          <div className="bg-[#F1F2F4] p-5">
          <div className="max-w-screen-xl mx-auto bg-white rounded-lg">
            <div className="grid grid-cols-12">
              <div className="col-span-5 p-5 py-16 flex justify-center items-center">
                  <Skeleton radius="lg">
                    <div className="h-[500px] w-[350px]"></div>
                  </Skeleton>
              {/* <Image className='h-[500px] w-[350px]' src={bookData.url} width={200} height={200} alt=""/> */}
                {/* <div className="bg-red-500 h-[500px] w-[350px] rounded-lg bg-[url('/assets/images/zero-to-one.jpeg')] bg-cover"></div> */}
              </div>
              <div className="col-span-7 py-16 pe-24">
                <div className="border-[3px] p-10 text-left rounded-lg">
                  <div className="flex flex-col gap-2">
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                    {/* <p className="text-4xl font-black">dfd</p> */}
                    <div className='flex gap-4'>
                      <Skeleton>
                        <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                      </Skeleton>
                      <Skeleton>
                        <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                      </Skeleton>
                    </div>
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                  </div>
                  <div className="flex flex-col gap-3 pt-10">
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                    <Skeleton>
                      <div className="text-4xl font-black w-[100%] h-[36px]"></div>
                    </Skeleton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className="bg-[#F1F2F4] p-5">
            <div className="max-w-screen-xl mx-auto bg-white rounded-lg">
              <div className="grid grid-cols-12">
                <div className="col-span-5 p-5 py-16 flex justify-center items-center">
                <Image className='h-[500px] w-[350px]' src={bookData.url} width={200} height={200} alt=""/>
                  {/* <div className="bg-red-500 h-[500px] w-[350px] rounded-lg bg-[url('/assets/images/zero-to-one.jpeg')] bg-cover"></div> */}
                </div>
                <div className="col-span-7 py-16 pe-24">
                  <div className="border-[3px] p-10 text-left rounded-lg">
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-black">{bookData.bookName}</p>
                      <div className='flex gap-4'>
                        <p className="text-xl font-bold">&#x20B9;{bookData.selling_prince}</p>
                        <p className="text-xl font-bold text-gray-600/50 line-through decoration-2">&#x20B9;{bookData.price}</p>
                      </div>
                      <p className="text-sm font-medium border-green-400 bg-green-100 text-green-600 border-[2px] rounded-lg py-1.5 px-3 w-[330px] text-center mt-4">Book is Available</p>
                    </div>
                    <div className="flex flex-col gap-3 pt-10">
                      <p>Subject: {bookData.subject}</p>
                      <p>Condition: {bookData.addition}</p>
                      <p>ISBN: {bookData.ISBN}</p>
                      <p>Type: {bookData.type}</p>
                      <p>Category: {bookData.category}</p>
                      <p>Author: {bookData.author}</p>
                      <p>Addition: {bookData.addition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        
      {/* {bookData && (
          <div className="bg-[#F1F2F4] p-5">
            <div className="max-w-screen-xl mx-auto bg-white rounded-lg">
              <div className="grid grid-cols-12">
                <div className="col-span-5 p-5 py-16 flex justify-center items-center">
                <Image className='h-[500px] w-[350px]' src={bookData.url} width={200} height={200} alt=""/>
                </div>
                <div className="col-span-7 py-16 pe-24">
                  <div className="border-[3px] p-10 text-left rounded-lg">
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-black">{bookData.bookName}</p>
                      <div className='flex gap-4'>
                        <p className="text-xl font-bold">{bookData.selling_prince}</p>
                        <p className="text-xl font-bold text-gray-600/50 line-through decoration-2">{bookData.price}</p>
                      </div>
                      <p className="text-sm font-medium border-green-400 bg-green-100 text-green-600 border-[2px] rounded-lg py-1.5 px-3 w-[330px] text-center mt-4">Book is Available</p>
                    </div>
                    <div className="flex flex-col gap-3 pt-10">
                      <p>Subject: {bookData.subject}</p>
                      <p>Condition: {bookData.addition}</p>
                      <p>ISBN: {bookData.ISBN}</p>
                      <p>Type: {bookData.type}</p>
                      <p>Category: {bookData.category}</p>
                      <p>Author: {bookData.author}</p>
                      <p>Addition: {bookData.addition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        } */}
      </div>
      <div className='bg-[#F1F2F4] p-5'> 
        {/* <div className='max-w-screen-xl mx-auto bg-white rounded-lg'>
          <div className='grid grid-cols-12'>
            <div className='col-span-5 p-5 py-16 flex justify-center items-center'>
              <div className="bg-red-500 h-[500px] w-[350px] rounded-lg bg-[url('/assets/images/zero-to-one.jpeg')] bg-cover"></div>
            </div>
            <div className='col-span-7 py-16 pe-24'>
              <div className='border-[3px] p-10 text-left rounded-lg'>
                <div className='flex flex-col gap-2'>
                  <p className='text-4xl font-black'>Zero To One</p>
                  <p className='text-xl font-bold'>$0.043</p>
                  <p className='text-sm font-medium border-green-400 bg-green-100 text-green-600 border-[2px] rounded-lg py-1.5 px-3 w-[330px] text-center mt-4'>Book is avalable from the seller!</p>
                </div>
                <div className='flex flex-col gap-3 pt-10'>
                  <p>Subject</p>
                  <p>Condition</p>
                  <p>ISBN</p>
                  <p>Type</p>
                  <p>Category</p>
                  <p>Auther</p>
                  <p>Addition</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        <div className='max-w-screen-xl mx-auto bg-white rounded-lg mt-5'>
          <div className='grid grid-cols-12'>
            <div className='col-span-5 p-16'>
              <div className="border-[3px] rounded-lg p-8 flex items-center">
                <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
                {!isAuth ? (
                  <div className='ps-8'>
                    <Skeleton>
                      <p className='tex t-xl font-semibold'></p>
                    </Skeleton>
                    <Skeleton> 
                    <p className='text-md font-medium text-gray-400 mb-5'></p>
                    </Skeleton>
                    <Skeleton>
                    <button className='border-[2px] border-black text-sm font-medium py-1.5 px-8 rounded-lg hover:text-white hover:bg-black'></button>
                    </Skeleton>
                  </div>
                ) : (
                  <div className='ps-8'>
                    <p className='text-xl font-semibold'>{user.username}</p>
                    <p className='text-md font-medium text-gray-400 mb-5'>Users</p>
                    <button className='border-[2px] border-black text-sm font-medium py-1.5 px-8 rounded-lg hover:text-white hover:bg-black'>Contect</button>
                  </div>
                )}
                {/* <div className='ps-8'>
                <p className='text-xl font-semibold'>Jaspreet Singh</p>
                <p className='text-md font-medium text-gray-400 mb-5'>Users</p>
                <button className='border-[2px] border-black text-sm font-medium py-1.5 px-8 rounded-lg hover:text-white hover:bg-black'>Message</button>
                </div> */}
              </div>
            </div>
            <div className='col-span-7 py-16 ps-0 pe-24'>
              <p className='text-2xl mb-5'>Discription</p>
              {!isA ? (
                <Skeleton>
                  <div className='w-[100%] h-[100px]'></div>
                </Skeleton>
              ) : (
                <p>{bookData.description}</p>
              )}
               {/* {bookData && (
                 <p>{bookData.description}</p>
              )} */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, recusandae atque! Asperiores sit at, totam distinctio quisquam facere obcaecati ipsa sed corrupti, dicta voluptas delectus! Dignissimos ullam fugit enim laborum?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, id exercitationem numquam hic sit sed animi aut perferendis eaque alias quasi sunt. Distinctio nemo quam nulla atque? Eos, quos recusandae?</p> */}
            </div>
          </div>
        </div>
      </div>
      <FooterData/>
    </div>
  )
}