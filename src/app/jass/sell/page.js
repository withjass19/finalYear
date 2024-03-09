'use client'
import {React, useRef, useState} from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import CardPhoto from '@/components/CardPhoto';
import useRouter from 'next/router';
// import { BookUploadAction } from '@/actions/BookUploadAction';
import axios from 'axios';

export default function Sell() {
  // const router = useRouter();
  const formRef = useRef();
  const inputRef = useRef(null);
  const  [images, setImages] = useState([])
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // image: "",
    bookName: "",
    description: "",
    author: "",
    addition: "",
    subject: "",
    condition: "",
    isbn: "",
    language: "",
    binding: "",
    category: "",
    original_price: "",
    selling_price: "",
  })

  const [errors, setErrors] = useState({});


  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, file]);
  }

  async function handleDeleteFiles(index){
    const newFiles = images.filter((_, i) => i !== index)
    setImages(newFiles);
    // router.reload();
  }

  // async function handleUpload(){
  //   if(!images.length) return alert('No image files are selected')
  //   if(!images.length > 1) return alert('Upload up to 1 image files')

  //   const bookData = new FormData();

  //   images.forEach(file => {
  //       bookData.append("files", file)
  //   })

  //   const res = await BookUploadAction(formData, bookData);
    

  // }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setSubmitting(true); 
    
    try {
      const response = await axios.get('/api/books/posts', formData);
      console.log(response.data);
      // Optionally, redirect the user to another page after successful sign-up
      router.push('/sign-in')
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle error (e.g., display error message to the user)
    }
  }

  return (
    <div>
      <div className='grid grid-cols-12 w-[100%] h-[100vh] overflow-hidden'>
        <div className='bg-black col-span-2 text-white'>01</div>
        <div className='col-span-10 flex justify-center overflow-y-auto'>
          <div className='w-[70%] h-[200%] p-20'>
            <div className='bg-white rounded-lg drop-shadow-2xl overflow-hidden'>
              <div className='flex justify-start px-20 py-8'>
                <div className='flex justify-center items-center gap-2 text-2xl font-semibold border-b-[3px] border-black' >
                  <p>Details</p>
                  <FiBookOpen/>
                </div>
              </div>
              <form onSubmit={handleSubmit} method='GET' className='flex flex-col gap-5 px-20'>

                <div>
                  <label htmlFor="bookname">Upload file</label>
                  <div className='flex flex-col justify-center items-center p-10 border-[2px] border-slate-400 border-dashed rounded-xl mt-2' onClick={handleImageClick}>
                    <p className='text-sm text-gray-400 mb-5'>(Only *.jpeg and *.png images will be accepted)</p>
                    <input type="file" ref={inputRef} name="image" onChange={handleImageChange} value={formData.image} className='hidden' accept='image/*'/>
                    <div className='bg-gray-300 flex justify-center items-center py-1.5 px-7 rounded-full gap-2'>
                      Choose File
                      <MdOutlineCloudUpload className='text-xl cursor-pointer' />
                    </div>
                  </div>

                  <div className='flex justify-center items-center'>
                    {
                      images.map((file, index) => (
                        <CardPhoto key={index} url={URL.createObjectURL(file)} onClick={() => handleDeleteFiles(index)}/>
                      ))
                    }
                  </div>
                </div>

                <Input 
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Book Name" 
                  placeholder="Enter your book name" 
                  name='bookName'
                  value={formData.bookName}
                  onChange={handleChange}
                />
                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Description" 
                  placeholder="Enter a description" 
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Author" 
                  placeholder="book author name " 
                  name='author'
                  value={formData.author}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Addition" 
                  placeholder="book Addition" 
                  name='addition'
                  value={formData.addition}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="subject" 
                  placeholder="subject" 
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="condition" 
                  placeholder="condition" 
                  name='condition'
                  value={formData.condition}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="ISBN" 
                  placeholder="ISBN" 
                  name='isbn'
                  value={formData.isbn}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Languag"
                  placeholder="Languag" 
                  name='language'
                  value={formData.language}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Binding"
                  placeholder="Binding" 
                  name='binding'
                  value={formData.binding}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Category"
                  placeholder="Category" 
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Orignal price"
                  placeholder="Orignal price" 
                  name='original_price'
                  value={formData.original_price}
                  onChange={handleChange}
                />

                <Input
                  size="md" 
                  variant="bordered" 
                  type="text" 
                  label="Selling price"
                  placeholder="Selling price" 
                  name='selling_price'
                  value={formData.selling_price}
                  onChange={handleChange}
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
  )
}
