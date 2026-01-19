import PrimaryButton from "./PrimaryButton";
import rightArrow from "@/app/assets/svgs/arrow-right.svg";
import closeSidebar from "@/app/assets/svgs/close.svg";
import Image from "next/image";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={` bg-white md:w-[500px] w-[300px]   h-screen absolute z-[9999] top-0 ${sidebarOpen == true ? "left-[0]" : "left-[-700px]"} transition-all duration-500 ease-in-out  `}
    >
      <div className="flex justify-end mt-5 me-5">
        <Image onClick={()=>(setSidebarOpen(false))} src={closeSidebar} className="h-10 w-10 cursor-pointer" />
      </div>
      <div className="flex h-full justify-center flex-col items-center ">
        <ul className="flex  flex-col justify-center items-center gap-[40px] pe-[40px] font-nudgetrial text-black">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Online Coaching</li>
          <li className="cursor-pointer">Resources</li>
        </ul>

        <PrimaryButton
          className={"z-[99999] cursor-pointer mt-15 lg:flex"}
          title={"Book A Consult"}
          image={rightArrow}
        />
      </div>
    </div>
  );
}

export default Sidebar;
