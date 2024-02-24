'use client'
import React, { useEffect, useState } from 'react';
import FooterData from '@/components/Footer'
import Nav from '@/components/NavBar'
import {Avatar} from "@nextui-org/react";
import axios from 'axios';

export default function page({ params }) {
  // console.log(params);

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    // Function to send data to the backend
    const sendDataToBackend = async () => {
      try {
        // Send HTTP POST request to your backend API endpoint
        const response = await axios.post('/api/books/find', params);

        // Update state with the response data from the backend
        setBookData(response.data.result);
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    };

    // Call the function when the component mounts
    sendDataToBackend();
  }, [params]);
  return (
    <div>
      <Nav/>
      <div>
      {bookData && (
          <div className="bg-[#F1F2F4] p-5">
            <div className="max-w-screen-xl mx-auto bg-white rounded-lg">
              <div className="grid grid-cols-12">
                <div className="col-span-5 p-5 py-16 flex justify-center items-center">
                  <div className="bg-red-500 h-[500px] w-[350px] rounded-lg bg-[url('/assets/images/zero-to-one.jpeg')] bg-cover"></div>
                </div>
                <div className="col-span-7 py-16 pe-24">
                  <div className="border-[3px] p-10 text-left rounded-lg">
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-black">{bookData.bookName}</p>
                      <p className="text-xl font-bold">{bookData.price}</p>
                      <p className="text-sm font-medium border-green-400 bg-green-100 text-green-600 border-[2px] rounded-lg py-1.5 px-3 w-[330px] text-center mt-4">{bookData.status}</p>
                    </div>
                    <div className="flex flex-col gap-3 pt-10">
                      <p>Subject: {bookData.subject}</p>
                      <p>Condition: {bookData.addition}</p>
                      <p>ISBN: {bookData.ISBN}</p>
                      <p>Type: {bookData.type}</p>
                      <p>Category: {bookData.publisher}</p>
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
                <div className='ps-8'>
                  <p className='text-xl font-semibold'>Jaspreet Singh</p>
                  <p className='text-md font-medium text-gray-400 mb-5'>Users</p>
                  <button className='border-[2px] border-black text-sm font-medium py-1.5 px-8 rounded-lg hover:text-white hover:bg-black'>Message</button>
                </div>
              </div>
            </div>
            <div className='col-span-7 py-16 ps-12 pe-32'>
              <p className='text-2xl mb-5'>Discription</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, recusandae atque! Asperiores sit at, totam distinctio quisquam facere obcaecati ipsa sed corrupti, dicta voluptas delectus! Dignissimos ullam fugit enim laborum?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, id exercitationem numquam hic sit sed animi aut perferendis eaque alias quasi sunt. Distinctio nemo quam nulla atque? Eos, quos recusandae?</p>
            </div>
          </div>
        </div>
      </div>
      <FooterData/>
    </div>
  )
}