import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Submit() {
  return (
    <div class="bg-[url('/assets/images/bg.png')] h-[100vh] w-full flex justify-center items-center">
       <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="text-center mb-7">
                <p className="text-2xl font-bold p-4 pb-2">Successfull!</p>
                <p className="text-sm px-9">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div action="" className="flex flex-col justify-center items-center px-9 mx-5 pb-9">
                <RiVerifiedBadgeFill  className="mb-9 text-9xl"/>
                <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white">
                  <Link href="/sign-in">Back to login</Link>
                </Button>
            </div>
       </div>
    </div>
  )
}