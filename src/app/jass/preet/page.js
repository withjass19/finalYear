'use client'
import React from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

export default function Dropzone(props) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const uploadFiles = async () => {
    const formData = new FormData();
    acceptedFiles.forEach(file => {
      formData.append('file', file);
    });

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh]'>
      <div className="w-[500px] text-center border-[2px] border-slate-400 border-dashed rounded-lg">
        <div {...getRootProps({className: 'dropzone p-10'})}>
          <input {...getInputProps()} name='profileImg'/>
          <p className='text-slate-400'>Drag drop some files here</p>
          <button type="button" className='border-[2px] border-slate-400 py-1.5 px-5 text-sm mt-5 rounded-lg' onClick={open}>
            Open File Dialog
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <button type="button" className='border-[2px] border-slate-400 py-1.5 px-5 text-sm mt-5 rounded-lg' onClick={uploadFiles}>
            Upload Files
        </button>
          {/* <h4>Files</h4> */}
        <ul className='mt-5'>{files}</ul>
      </div>
    </div>
  );
}