import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function defaultCard() {
  return (
    <div>
      <Card className="py-4 mx-24">
              <CardHeader className="pb-0 pt-0 px-4 flex-col items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl py-20"
                  src="/assets/images/defaultBook.png"
                  width={50}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2 text-center">
                <h4 className="font-medium text-large">Add cover story</h4>
              </CardBody>
            </Card>
    </div>
  )
}
