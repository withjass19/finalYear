'use client'
import Nav from '@/components/NavBar'
import Image from 'next/image';
// import React from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import {Tooltip, Button} from "@nextui-org/react";
import { IoEyeOutline } from "react-icons/io5";
import {React, useRef, useState} from 'react'
import {Input} from "@nextui-org/react";
import { FiBookOpen } from "react-icons/fi";
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import Dashboard_Nav_Bar from '@/components/Dashboard_Nav_Bar';
import toast, { Toaster } from 'react-hot-toast';

export default function Sell() {
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        noClick: true,
        noKeyboard: true
      });
    
      const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path}
        </li>
      ));
    
      const [bookName, setBookName] = useState("");
      const [discription, setDiscription] = useState("");
      const [author, setAuthor] = useState("");
      const [addition, setAddition] = useState("");
      const [subject, setSubject] = useState("");
      const [condition, setCondition] = useState("");
      const [isbn, setIsbn] = useState("");
      const [language, setLanguage] = useState("");
      const [binding, setBinding] = useState("");
      const [category, setCategory] = useState("");
      const [original_price, setOriginal_price] = useState("");
      const [selling_price, setSelling_price] = useState("");
      // const [notify, setNotify] = useState("");
      // let notify;
    
      const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        acceptedFiles.forEach(file => {
          formData.append('file', file);
        });
        formData.set('bookName', bookName);
        formData.set('discription', discription);
        formData.set('author', author);
        formData.set('addition', addition);
        formData.set('subject', subject);
        formData.set('condition', condition);
        formData.set('isbn', isbn);
        formData.set('language', language);
        formData.set('binding', binding);
        formData.set('category', category);
        formData.set('original_price', original_price);
        formData.set('selling_price', selling_price);
         // Get the token from local storage
        const token = localStorage.getItem('token');
        console.log('Token:', localStorage.getItem('token'));
        formData.set('token', token);
    
        try {
          const response = await axios.post('/api/books/posts', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Upload successful:', response.data);
          toast.success(response.data.message)
          // window.location.reload() 
        } catch (error) {
          console.error('Upload failed:', error);
        }
    
      }

      // const notify = () => toast(response.data.message);
  return (
    <div>
      <Nav/>

      <div className='bg-red-200 w-[100%] h-[100%] grid grid-cols-12'>
        <div className='bg-black col-span-2'>
          <Dashboard_Nav_Bar/>
          <Toaster
                    // className="absolute -top-36"
                    position="bottom-left"
                    reverseOrder={false}
                  />
        </div>
        <div className='col-span-10 bg-slate-100 flex flex-col gap-4 p-8'>
          <div className="bg-red-00 flex justify-center">
            <div className='w-[78%] h-[100%] px-20 py-10'>
                <div className='bg-white rounded-lg drop-shadow-2xl overflow-hidden'>
                <div className='flex justify-start px-20 py-8'>
                    <div className='flex justify-center items-center gap-2 text-2xl font-semibold border-b-[3px] border-black' >
                    <p>Details</p>
                    <FiBookOpen/>
                    </div>
                </div>
                  
                <form onSubmit={handleSubmit} method='GET' className='flex flex-col gap-5 px-20'>
                    
                    <div>
                    <div className=" text-center border-[2px] border-slate-400 border-dashed rounded-lg">
                        <div {...getRootProps({className: 'dropzone p-10'})}>
                        <input {...getInputProps()} name='profileImg'/>
                        <p className='text-slate-400'>Drag drop some files here</p>
                        <button type="button" className='border-[2px] border-slate-400 py-1.5 px-5 text-sm mt-5 rounded-lg' onClick={open}>
                            Open File Dialog
                        </button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        {/* <button type="button" className='border-[2px] border-slate-400 py-1.5 px-5 text-sm mt-5 rounded-lg' onClick={uploadFiles}>
                            Upload Files
                        </button> */}
                        {/* <h4>Files</h4> */}
                        <ul className='mt-5'>{files}</ul>
                    </div>
                    </div>

                    <Input 
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Book Name" 
                    placeholder="Enter your book name" 
                    name='bookName'
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                    />
                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Description" 
                    placeholder="Enter a description" 
                    name='description'
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Author" 
                    placeholder="book author name " 
                    name='author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Addition" 
                    placeholder="book Addition" 
                    name='addition'
                    value={addition}
                    onChange={(e) => setAddition(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="subject" 
                    placeholder="subject" 
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="condition" 
                    placeholder="condition" 
                    name='condition'
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="ISBN" 
                    placeholder="ISBN" 
                    name='isbn'
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Languag"
                    placeholder="Languag" 
                    name='language'
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Binding"
                    placeholder="Binding" 
                    name='binding'
                    value={binding}
                    onChange={(e) => setBinding(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Category"
                    placeholder="Category" 
                    name='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Orignal price"
                    placeholder="Orignal price" 
                    name='original_price'
                    value={original_price}
                    onChange={(e) => setOriginal_price(e.target.value)}
                    />

                    <Input
                    size="md" 
                    variant="bordered" 
                    type="text" 
                    label="Selling price"
                    placeholder="Selling price" 
                    name='selling_price'
                    value={selling_price}
                    onChange={(e) => setSelling_price(e.target.value)}
                    />
                    <div className='flex justify-center py-8'>
                    <button type='submit' className='border-black border-[2px] py-1.5 px-7 rounded-full'>Publish Book</button>
                    </div>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}