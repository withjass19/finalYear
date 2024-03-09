import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardPhoto({ url, onClick }) {
  return (
    <div className='my-7'>
      <Card className="py-4 mx-24">
              <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
                {/* <Image
                  alt="Card background"
                  className="object-cover rounded-xl py-20"
                  src="/assets/images/defaultBook.png"
                  width={50}
                /> */}
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl w-auto h-auto"
                  src={url}
                  width={200}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2 text-center">
                {/* <h4 className="font-medium text-large">Add cover story</h4> */}
                <button className='border-[2px] border-black py-1.5 mt-3 font-semibold rounded-lg hover:bg-black hover:text-white' type="button" onClick={onClick}>Remove</button>
              </CardBody>
            </Card>
    </div>
  )
}
