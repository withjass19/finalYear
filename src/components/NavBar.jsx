"use client"
// import Logo from "./Logo";
import { useEffect, useState } from 'react';
import { IoAdd } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {AiOutlineUser} from "react-icons/ai"
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState(0)

  useEffect(() => {
    try{
      const token  = localStorage.getItem('token');
      if(token){
        setUser({value: token})
        setKey(Math.random())
      }
    }
    catch (error) {}
  }, [])

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({value:null});
    router.push('/');
  }




  // const [signedUp, setSignedUp] = useState(false);
  // const handleSignUp = () => {
    // Simulate sign-up process and set signedUp to true
    // setSignedUp(true);
    // Replace the following line with actual logic to fetch user's image URL after sign-up
    // setUserImage('user-image-url');
  // };

  return (
    <div user={user} key={key} className="h-20 bg-white">
        <nav className="max-w-screen-xl mx-auto px-4 xl:px-0 py-10 h-full flex items-center justify-between md:gap-x-5 md:justify-start">
          {/* <Logo/> */}
          <a href="/" className="text-3xl font-black">ReRead</a>
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
          <Link href="/books/post">
            <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-500 duration-200">
              <IoAdd className="text-xl"/>
              <p className="text-sm font-semibold pe-3">Sell</p>
              {/* <span className="bg-white text-orange-500 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">0</span> */}
            </div>
          </Link>

          <div>
            <IoNotifications className="text-2xl"/>
          </div>

          <div className="grid grid-col-2 grid-flow-col gap-4">
            {/* Login/ Refister */}
            {/* <Link href="/sign-up" onClick={handleSignUp}>
                <div className="bg-gray-100 text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200">
                  <AiOutlineUser className="text-2xl"/>
                  <p className="text-sm font-semibold">Login/Register</p>
                </div>
              </Link> */}
            {!user.value ? (
              <Link href="/sign-up">
                <div className="bg-gray-100 text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200">
                  <AiOutlineUser className="text-2xl"/>
                  <p className="text-sm font-semibold">Login/Register</p>
                </div>
              </Link>
            ): (
              <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            // description="@tonyreichert"
            // name="Tony Reichert"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            {/* <p className="font-bold">Signed in as</p> */}
            {/* <p className="font-bold"> {user.value.name} </p> */}
            <p className="font-bold">@tonyreichert</p>
          </DropdownItem>
          <DropdownItem key="analytics">
            <Link href="/user/dashboard">
              Dashboard
            </Link>
          </DropdownItem>
          <DropdownItem key="settings">
            <Link href="/profile">
              My Settings
            </Link>
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
              // <button className='bg-gray-100 text-gray-500 flex items-center justify-center py-1.5 px-5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200 text-sm font-semibold' onClick={logout}>Logout</button>
            )}
          </div>
        </nav>
    </div>
  )
}