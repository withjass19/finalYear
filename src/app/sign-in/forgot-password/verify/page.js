import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";

export default function Verify() {
  return (
    <div class="bg-[url('/assets/images/bg.png')] h-[100vh] w-full flex justify-center items-center">
       <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="text-center mb-7">
                <p className="text-2xl font-bold p-4 pb-2">Forgot your Password?</p>
                <p className="text-sm px-9">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <form action="" className="flex flex-col px-9 mx-5 pb-9">
                <div className="mb-7 flex flex-row w-full justify-between">
                    <input type="text" className="border-[2px] rounded-lg border-gray-300 p-2 text-xl text-center placeholder:text-xl w-[50px] placeholder:text-center" name="" id="" placeholder="0" />
                    <input type="text" className="border-[2px] rounded-lg border-gray-300 p-2 text-xl text-center placeholder:text-xl w-[50px] placeholder:text-center" name="" id="" placeholder="0" />
                    <input type="text" className="border-[2px] rounded-lg border-gray-300 p-2 text-xl text-center placeholder:text-xl w-[50px] placeholder:text-center" name="" id="" placeholder="0" />
                    <input type="text" className="border-[2px] rounded-lg border-gray-300 p-2 text-xl text-center placeholder:text-xl w-[50px] placeholder:text-center" name="" id="" placeholder="0" />
                </div>
                <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9">
                  <Link href="/sign-in/forgot-password/new-password">Verified</Link>
                </Button>
            </form>
       </div>
    </div>
  )
}
