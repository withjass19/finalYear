import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div class="bg-[url('/assets/images/bg.png')] h-[100vh] w-full flex justify-center items-center">
       <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="text-center mb-7">
                <p className="text-2xl font-bold p-4 pb-2">Forgot your Password?</p>
                <p className="text-sm px-9">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <form action="" className="flex flex-col px-9 mx-5 pb-9">
                {/* <Input className="mb-3" type="text" variant="underlined" label="Username" placeholder="Enter your username" /> */}
                {/* <Input className="mb-3" type="email" variant="underlined" label="Email Address" placeholder="Enter your email" /> */}
                <Input className="mb-7" type="text" variant="underlined" label="Phone Number" placeholder="Enter your phone number" />
                {/* <Input className="mb-7" type="password" variant="underlined" label="Password" placeholder="Enter password" /> */}
                <Button className="bg-transparent border-[2px] border-black text-black font-medium hover:bg-black hover:text-white mb-9">
                  <Link href="/sign-in/forgot-password/verify">Next</Link>
                </Button>
                {/* <div className="text-center">
                    <span className="text-sm text-gray-500">Already have an account ? </span>
                    <span className="font-medium text-gray-600 hover:text-black cursor-pointer">
                        <Link href="/sign-in"> Sign in</Link>
                    </span>
                </div> */}
            </form>
       </div>
    </div>
  )
}
