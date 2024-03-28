'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Nav from '@/components/NavBar'
import FooterData from '@/components/Footer'
import BookCard1 from '@/components/BookCard1'

export default function Books() {
  return (
    <div id="top">
      <Nav/>

      <div className="flex flex-col p-5">
        <div className='pt-10 pb-5 relative'>
          <p className='text-center text-6xl font-bold leading-normal px-72'>The best place to Sell & Buy SecondHand Books</p>
          <div className='flex justify-between items-center px-32 py-5'>
            <div className='w-72'>
              <p> 
                Discover ReRead: Indias premier marketplace for preloved books. Unleash forgotten treasures and find new favorites today!
              </p>
            </div>
            <Link href="/books/view-all">
              <div className='ps-10'>
                  <button className='px-10 py-2 rounded-full ring-offset-2 ring-4 ring-slate-500 font-medium text-md cursor-pointer'>
                    More collections
                  </button>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center w-[100%] relative -top-16 bg-transparent h-80'>
          <Image className='w-[80%]' src="/assets/images/header.png" width={853} height={293} alt='image' />
        </div>
      </div>

      <div className='bg-black text-border flex flex-row text-center text-transparent text-7xl font-bold overflow-hidden gap-20 relative -left-20 w-[105%] py-8'>
        <p>ReRead</p>
        <p>ReRead</p>
        <p>ReRead</p>
        <p>ReRead</p>
        <p>ReRead</p>
      </div>

      <div className='flex justify-center items-center p-10'>
        <div className='flex gap-10 pt-8'>
          <div className='text-center w-[110px]'>
          <Image src="/assets/images/school.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>College Books</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/school.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>Exam Preparation</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/reading.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>Reading Books</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/school.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>School Books (upto 12th)</p>
          </div>
          <div className='text-center w-[110px]'>
            <Image src="/assets/images/view-all.webp" width={100} height={100} alt='img'/>
            {/* <div className='p-14 w-[100px] h-[100px] bg-green-500 rounded-full'></div> */}
            <p className='pt-3'>View All Second Hand books</p>
          </div>
        </div>
      </div>

      <div className='bg-black text-white px-28 py-14'>
        <div className='flex justify-between items-center mb-7'>
          <p className='text-xl'>Newly Added Books</p>
          <button className='border-[2px] border-white px-10 py-1.5 rounded-full'>More</button>
        </div>
        <div className='grid grid-rows-1 grid-cols-6 gap-10'>
          <BookCard1/>
          <BookCard1 />
          <BookCard1 />
          <BookCard1 />
          <BookCard1 />
          <BookCard1 />
        </div>
      </div>

      <div className='py-20 flex flex-col justify-center items-center'>
        <p className='text-2xl font-semibold mb-12'>Or Browse from Curated Book Categories</p>
        <div className='grid grid-rows-3 gap-7'>
          <div className='flex gap-5'>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Arihant Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Books for JEE</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>CAT Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Dictionary</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Encyclopedia</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Gate Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>GMAT Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Health</button>
          </div>
          <div className='flex gap-5'>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>History & Archaeology Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Made Easy Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Mythology</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>NCERT Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>Politics Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>RD Sharma Books</button>
          </div>
          <div className='flex gap-5 justify-center'>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>SL Arora Physics Books</button>
            <button className='border-[2px] border-black rounded-full px-7 py-2'>View All Used Books</button>
          </div>
        </div>
      </div>

      <div className='bg-black text-white px-28 py-14'>
        <div className='flex justify-between items-center mb-7'>
          <p className='text-xl'>Buy Second Hand Fiction Books</p>
          <button className='border-[2px] border-white px-10 py-1.5 rounded-full'>More</button>
        </div>
        <div className='grid grid-rows-1 grid-cols-6 gap-10'>
          <BookCard1/>
          <BookCard1 />
          <BookCard1 />
          <BookCard1 />
          <BookCard1 />
          <BookCard1 />
        </div>
      </div>

      <div className='flex flex-col text-center gap-5 py-14 px-32'>
        <p className='font-semibold text-2xl mb-5'>Discover The Best Selection Of Used Books Online. Buy Second Hand Books Online In India</p>
        <p>ReRead is Indias first online inter community bookstore where buyers can purchase a wide range of second hand books, old books directly from other students and book readers across India at affordable prices. We strongly believe that every book deserves a second chance and we understand the importance of affordable reading materials, and thats why weve created a platform that allows you to find great deals on pre-loved books.</p>
        <p>Whether you are a school student, a college student or a book reader, at ReRead, we offer a wide range of genres to cater you. We have a huge collection of Used Books across various genres such as literature, fiction, non-fiction, romance, novels, and many more.</p>
        <p>One of the key advantages of shopping on ReRead is the incredibly affordable prices. Since at ReRead, our sellers are the students or a person who has previously used that book, so we can offer you those books at significantly lower prices compared to new books. Plus, youll often find unique editions and out-of-print books that may not be readily available elsewhere.</p>
        <p>We are committed to providing a secure and seamless shopping experience for our users. Our website is easy to navigate, and our checkout process is quick and secure. Buyers can also communicate directly with the sellers to ask questions, request additional information, or negotiate prices through ReRead Chats.</p>
        <p>Also, whether you are a student, or a book reader, ReRead provides an excellent opportunity to sell your used books and earn actual money in your Bank account. If you have books that you no longer need, our platform enables you to easily list them for sale.</p>
        <p>Join the ReRead community today and explore our vast collection of affordable second hand books. Discover hidden literary treasures, expand your reading horizons. Start browsing, find your next favorite book, and embark on a journey of knowledge and imagination.</p>
      </div>

      <div className='bg-black text-white flex justify-center items-center p-5 text-xl'>
        <Link href="#top">Back To Top</Link>
      </div>

      <FooterData/>
    </div>
  )
}