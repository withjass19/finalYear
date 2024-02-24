'use client'
import React, { useRef, useState } from 'react'
import PhotoCards from './PhotoCards';
import ButtonSubmit from './ButtonSubmit';

export default function UploadImage() {
    const formRef = useRef();
    const [files, setFiles] = useState([]);

    async function  handleInputFiles(e) {
        // e.preventDefault()
        const files = e.target.files;
        
        const newFiles = [...files].filter(file => {
            if(file.size < 1024*1024 && file.type.startsWith('image/')){
                return file;
            }
        })
        setFiles(prev => [...newFiles, ...prev])
        console.log({files, newFiles});
        formRef.current.reset();
    }

    async function handleDeleteFile(index){
        const newFiles = files.filter((_, i) => i !== index)
        setFiles(newFiles);
    }

    async function handleUpload(){
        if(!files.length) return alert('No image files are selected')
        if(!files.length > 3) return alert('Upload up to 3 image files')
    }

  return (
    <div>
      <form action={handleUpload} ref={formRef}>
        <div className='bg-[#ddd] h-[200px] my-[10px] mx-0 p-10'>
            <input type="file" accept='image/*' multiple  onChange={handleInputFiles}/>
            <h5 className='text-red-500'>(*) Only accept image files less than 1mb in size. Up to 3 photo files.</h5>
        </div>
        <div className='flex gap-10 flex-wrap mx-0 my-10'>
            {
                files.map((file, index) => (
                    <PhotoCards key={index} url={URL.createObjectURL(file)} onClick={handleDeleteFile}/>
                ))
            }
        </div>
        <ButtonSubmit value="Upload to Cloudinary"/>
      </form>
    </div>
  )
}
