import coachingGirl from "@/app/assets/images/coaching-girl.png";

import Image from "next/image";
import ServicesAccordion from "../ServicesAccordion";

function OurCoachingServices() {
  return (
    <div className=" bg-[#EFF5FF] pb-[70px] ps-[20px] pe-[20px] flex justify-center lg:flex-row flex-col items- gap-[40px] pt-[70px]  ">
      <div className="md:w-[550px] lg:mb-0 mb-10 w-full">
        <h2 className=" text-center leading-17 font-nudgetrial font-bold sm:text-[50px] text-[40px] md:text-[64px] lg:text-start text-center">
          Our Coaching Services
        </h2>
        <p className=" md:text-[18px] text-[16px] mb-[40px] lg:text-start text-center font-worksans">
          At Maximum Performance Health, we deliver personalized, science-based
          strategies to help you achieve lasting health and fitness results.
        </p>
        <div className="flex justify-center mb-[0px]">
          <ServicesAccordion />
        </div>
      </div>

      <div className="lg:w-[550px] w-full">
        <Image
          alt="coaching-girl"
          className="lg:w-[641px] w-full h-full object-fit-cover"
          src={coachingGirl}
        />
      </div>
    </div>
  );
}

export default OurCoachingServices;
