"use client";
import Image from "next/image";
import logo from "@/app/assets/svgs/web-logo.svg";
import rightArrow from "@/app/assets/svgs/arrow-right.svg";
import hamburger from "@/app/assets/svgs/hamburger.svg";
import PrimaryButton from "./PrimaryButton";
import Sidebar from "./Sidebar";
import { useState } from "react";
function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>

    <div className=" bg-[#174DAD] md:ps-[98px] md:pe-[98px] ps-[20px] pe-[20px] h-[105px] flex justify-between items-center">
      <Image
        className="md:w-[214px] md:h-[65px] w-[150px] h-[60px]"
        src={logo}

      />

      <div className="flex items-center ">
        <ul className="lg:flex hidden gap-[40px] pe-[40px] font-nudgetrial text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Online Coaching</li>
          <li className="cursor-pointer">Resources</li>
        </ul>

        <Image
          className="w-10 h-10 cursor-pointer lg:hidden block "
          src={hamburger}
          onClick={()=>(setSidebarOpen(true))}
        />

        <PrimaryButton
          className={"z-[99999] lg:flex hidden"}
          title={"Book A Consult"}
          image={rightArrow}
        />
      </div>
    </div>
      <div className="lg:hidden block">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
}

export default Navbar;
