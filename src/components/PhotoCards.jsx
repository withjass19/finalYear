import Image from 'next/image'
import React from 'react'

export default function PhotoCards({ url, onClick }){
  return (
    <div>
        <div className='border-[2px] border-red-500'>
            <Image src={url} className='h-auto w-auto' alt='image' width={100} height={300} priority/>
        </div>

        <button type="button" onClick={onClick}>Delete</button>
    </div>
  )
}
