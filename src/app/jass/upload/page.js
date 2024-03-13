'use client'
// import UploadImage from '@/components/UploadImage'
// import Image from 'next/image'
import {React} from 'react'

export default function Upload() {
  // const inputRef = useRef(null);
  // const  [images, setImages] = useState([])

  // const handleImageClick = () => {
  //   inputRef.current.click();
  // }

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setImages(prevImages => [...prevImages, file]);
  // }

  return (
    <div>
      <h1>NextJS Server Action Upload Image Files</h1>
      <UploadImage/>
      {/* <div onClick={handleImageClick}>
        {images ? (
          <Image src="/assets/images/photo.png" alt='image' width={200} height={200}/>
        ) : (
          <Image src="/assets/images/photo.png" alt='image' width={200} height={200}/>
        )}
        <input type="file" ref={inputRef} onChange={handleImageChange} className='hidden'/>
      </div> */}
    </div>
  )
}
