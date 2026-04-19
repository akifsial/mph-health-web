import PrimaryButton from "../PrimaryButton";
import rightArrow from "@/app/assets/svgs/arrow-right.svg";
import trainer1 from "@/app/assets/images/trainer-1.png";
import trainer2 from "@/app/assets/images/trainer-2.png";
import trainer3 from "@/app/assets/images/trainer-3.png";
import trainer4 from "@/app/assets/images/trainer-4.png";
import trainer5 from "@/app/assets/images/trainer-5.png";
import trainer6 from "@/app/assets/images/trainer-6.png";
import trainer7 from "@/app/assets/images/trainer-7.png";

import Image from "next/image";

function GymTrainers() {
  return (
    <div className="ps-[20px] pe-[20px] flex flex-col justify-center items-center pt-[70px]  ">
      <div className="md:w-[600px] w-full">
        <h2 className="leading-17 font-nudgetrial font-bold sm:text-[50px] text-[40px] md:text-[64px] text-center">
          Science-Backed, Results Driven Coaching
        </h2>
        <p className="md:text-[18px] text-[16px] mb-[40px] text-center font-worksans">
          Every client receives a personalized approach backed by the latest
          research in functional health, nutrition science, and exercise
          physiology. Your transformation is our mission.
        </p>
        <div className="flex justify-center mb-[40px]">
          <PrimaryButton
            className={"z-[99999] cursor-pointer lg:flex hidden"}
            title={"Meet The Team"}
            image={rightArrow}
          />
        </div>

        <div className="trainers-container flex justify-center">
          <Image alt="trainer1" src={trainer1} />
          <Image alt="trainer2" src={trainer2} />
          <Image alt="trainer3" src={trainer3} />
          <Image alt="trainer4" src={trainer6} />
          <Image alt="trainer5" src={trainer4} />
          <Image alt="trainer6" src={trainer5} />
          <Image alt="trainer7" src={trainer7} />
        </div>
      </div>
    </div>
  );
}

export default GymTrainers;
