import PrimaryButton from "../PrimaryButton";
import rightArrow from "@/app/assets/svgs/arrow-right.svg";
import fitGirl from "@/app/assets/images/fit-girl.png";
import userPlaceholder1 from "@/app/assets/images/user-placeholder-1.png";

import Image from "next/image";

function Hero() {
  return (
    <div
      className="relative z-[] center-glow h-screen bg-[#174DAD] flex justify-center items-center  relative md:after:content-[''] after:absolute after:right-54 after:top-[-105px] after:w-[211px] after:h-[585px] after:h-4 md:before:inset-0
  after:bg-gradient-to-b
  md:after:from-white/30
  md:after:to-white/5
  "
    >
      <div className="">
        <p className="md:block hidden ps-3 text-[24px]  font-nudgetrial text-white">
          Transform Your Body Optimize Your
        </p>
        <h1 className="top-heading leading-none font-montserrat-bold  text-white md:tracking-[31px] tracking-[15px] lg:text-[234px] md:text-[130px] text-[50px] text-center ">
          HEALTH
        </h1>
        <div className="w-full mb-[33px] flex justify-between">
          <p className="ps-3 md:text-start text-center  z-[9999999] text-white font-worksans md:w-[489px] w-[330px] text-[17px] md:mt-5 mt-15">
            Struggling With Hormones, Gut Health, Weight Management, Or Physique
            Goals? Our Evidence-Based Coaching Delivers Real, Lasting Results.
          </p>

          <div className="md:block hidden w-[211px] flex flex-col justify-center items-center">
            <p className="font-semibold mb-[16px] text-white text-[20px] font-worksans text-center">
              5,000+ Successful Transformations
            </p>
            <div className="flex">
              <Image className=" h-[55px] w-[55px]" src={userPlaceholder1} alt="client" />
              <Image
                className="h-[55px] w-[55px] ms-[-20px]" alt="client"
                src={userPlaceholder1}
              />
              <Image
                className="h-[55px] w-[55px] ms-[-20px]" alt="client"
                src={userPlaceholder1}
              />
            </div>
          </div>
        </div>
        <div className="md:block flex justify-center md:mt-0 mt-50">
          <PrimaryButton
            title={"Start Your Transformation"}
            image={rightArrow}
          />
        </div>
      </div>
      <Image
        className="absolute md:top-[-25px] top-[0px] md:w-[439px] md:h-[744px] w-[320px] h-[570px] object-fit-cover"
        src={fitGirl} alt="client"
      />
    </div>
  );
}

export default Hero;
