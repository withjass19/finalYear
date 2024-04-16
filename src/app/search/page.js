'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import FooterData from '@/components/Footer'
import Nav from '@/components/NavBar'
import {Divider} from "@nextui-org/react";
import Filter from '@/components/Filter';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';
import axios from 'axios';

export default function Search() {
  const search = useSearchParams();
  const searchQuery = search ? search?.get('q') : null;

  const encodedSearchQuery = decodeURIComponent(searchQuery || "");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const formData = new FormData();
        // formData.append("query", encodedSearchQuery)
  
        formData.set("query", encodedSearchQuery);
  
        const response = await axios.post('/api/search', formData);
        // console.log("searchData", response.data)
        setBooks(response.data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-[#F1F2F4]'>
      <Nav/>

      <div className='grid grid-cols-12 grid-rows-1 gap-5 m-2'>
        <div className="bg-white col-span-3 h-[800px]">
          <p className='py-2'>Filters</p>
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
                  <p className="text-default-500">{book.price}</p>
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
        </div>
      </div>

      <FooterData/>
    </div>
  );
}
