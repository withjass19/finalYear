import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";

export default function NewPassword() {
  return (
    <div class="bg-[url('/assets/images/bg.png')] h-[100vh] w-full flex justify-center items-center">
       <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="text-center mb-7">
                <p className="text-2xl font-bold p-4 pb-2">New Password?</p>
                <p className="text-sm px-9">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <form action="" className="flex flex-col px-9 mx-5 pb-9">
                <Input className="mb-3" type="password" variant="underlined" label="New Password" placeholder="Enter new password" />
                <Input className="mb-7" type="password" variant="underlined" label="New Re-Password" placeholder="Enter new re-password" />
                <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white">
                  <Link href="/sign-in/forgot-password/new-password/submit">Submit</Link>
                </Button>
            </form>
       </div>
    </div>
  )
}