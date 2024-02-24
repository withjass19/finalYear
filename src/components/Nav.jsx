"use client"
// import Logo from "./Logo";
import { IoAdd } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {AiOutlineUser} from "react-icons/ai"
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter()
  return (
    <div className="h-20 bg-white">
        <nav className="max-w-screen-xl mx-auto px-4 xl:px-0 py-10 h-full flex items-center justify-between md:gap-x-5 md:justify-start">
          {/* <Logo/> */}
          <div
            className="text-3xl font-black cursor-pointer"
            onClick={() => router.push("/")}
            >ReRead</div>
          {/* Search Field */}
          <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-gray/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
            <FiSearch className="text-gray-500 group-focus-within:text-black duration-200" size={18} color="#000"/>
            <input
              // style={outline: "none"}
              type="text"
              placeholder="Search for Books"
              className="placeholder:text-sm flex-1 outline-none border-none focus:outline-none"
            />
          </div>

          {/* sell button */}
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-500 duration-200">
            <IoAdd className="text-xl"/>
            <p className="text-sm font-semibold pe-3">Sell</p>
            {/* <span className="bg-white text-orange-500 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">0</span> */}
          </div>

          <div>
            <IoNotifications className="text-2xl"/>
          </div>

          <div className="grid grid-col-2 grid-flow-col gap-4">
            {/* Login/ Refister */}
          <Link href="/sign-up">
            <div className="bg-gray-100 text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200">
              <AiOutlineUser className="text-2xl"/>
              <p className="text-sm font-semibold">Login/Register</p>
            </div>
          </Link>
          </div>
        </nav>
    </div>
  )
}