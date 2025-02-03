"use client"
import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";
import {  SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  const sidebarTriggerRef = React.useRef<HTMLButtonElement>(null);

  const handleMenuClick = () => {
    sidebarTriggerRef.current?.click();
  }

  
  return (
    <div className="w-full bg-gray-800 fixed top-0 z-50"> 
      <div className=" h-16 mx-4 flex items-center justify-between">
        <div className="flex items-center ">
          
          <Menu className="text-white block md:hidden cursor-pointer"  size={30}  onClick={handleMenuClick}/>
          

          <SidebarTrigger ref={sidebarTriggerRef} className="hidden" />
          <Image
            src="/assets/main-logo.svg"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
          <h1 className="text-white text-2xl font-semibold ">Furniro</h1>
        </div>
        <div>
         

            <Button className=" text-gray-800 bg-[#f0d786] rounded w-[100px] p-2 hover:bg-[#f0d786]" onClick={()=>router.push("/sign-in")}>Login</Button>
       
        </div>
      </div>
    </div>
  );
};

export default Navbar;
