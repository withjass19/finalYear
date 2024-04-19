'use client'
import React, { useEffect, useState } from 'react';
import FooterData from '@/components/Footer'
import Nav from '@/components/NavBar'
import {Divider} from "@nextui-org/react";
import Filter from '@/components/Filter';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';
import axios from 'axios';

export default function ViewAll(props) {
  console.log(props);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/books');
      setBooks(response.data.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='bg-[#F1F2F4]'>
      <Nav/>

      <div className='grid grid-cols-12 grid-rows-1 gap-5 m-2'>
        <div className="bg-white col-span-3 h-[800px]">
          <p className='pt-3 pb-2 font-semibold text-xl px-7'>Filters</p>
          <Divider/>
          <div>
             <Filter/>
          </div>

        </div>
        <div className="bg-white col-span-9 p-5">
          <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
            {books.map(book => (
              <Card shadow="sm" key={book._id} isPressable >
              <Link href={`/books/book/${book._id}`}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    // shadow="sm"
                    // radius="lg"
                    width="100%"
                    alt={book.bookName}
                    className="w-full h-[370px]"
                    // src='/assets/images/zero-to-one.jpeg'
                    src={book.url}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{book.bookName}</b>
                  <p className="text-default-500">&#x20B9;{book.selling_prince}</p>
                </CardFooter>
              </Link>
            </Card>
            ))}
            {/* {list.map((item, index) => (
              <Card shadow="sm" key={index} isPressable >
                <Link href={item.link}>
                  <CardBody className="overflow-visible p-0">
                    <Image
                      // shadow="sm"
                      // radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full h-[370px]"
                      src='/assets/images/zero-to-one.jpeg'
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                  </CardFooter>
                </Link>
              </Card>
            ))} */}
          </div>

          {/* <div className='flex justify-center p-10'>
            <Pagination 
            showControls 
            // showShadow 
            // color="warning" 
            total={10} 
            initialPage={1}
            classNames={{
              // wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
              // item: "w-8 h-8 text-small rounded-none bg-transparent",
              cursor:
                "bg-black shadow-xl from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
            }} 
            />
          </div> */}
        </div>
      </div>

      <FooterData/>
    </div>
  )
}