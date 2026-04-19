"use client";
import ArrowTop from "@/app/assets/svgs/arrow-top.svg";
import ArrowRight from "@/app/assets/svgs/arrow-right-2.svg";
import Image from "next/image";
import { useState } from "react";

function ServicesAccordion() {
  const [accordionID, setAccordionID] = useState<number | null>();

  const servicesData = [
    {
      id: 1,
      title: "Detailed Assessment",
      description:
        "Start with a comprehensive health analysis to identify key areas for improvement and create a roadmap for your transformation.",
    },
  ];
  return (
    <div className="w-full">
      {servicesData.map((key, index) => (
        <div key={index}>
          <div
            onClick={() =>
              key?.id === accordionID
                ? setAccordionID(null)
                : setAccordionID(key?.id)
            }
            className="bg-white cursor-pointer flex justify-between mt-[15px] w-full py-[20px] px-[24px] w-full rounded-[16px]"
          >
            <h3 className="font-nudgetrial text-black text-[24px] font-bold ">
              Custom Goal-Aligned Plan
            </h3>
            <div className="bg-[#E8FE61] rounded-[100px] flex justify-center items-center w-[40px] h-[40px]">
              <Image alt="arrow" src={ArrowRight} />
            </div>
          </div>
          {accordionID === key.id && (
            <div className="w-full rounded-[16px] bg-[#174DAD] px-[32px] py-[28px] ">
              <div>
                <div className="flex w-full justify-between">
                  <h3 className="text-[#E8FE61] text-[24px] font-bold font-nudgetrial">
                    {key?.title}
                  </h3>
                  <div className="bg-[#E8FE61] rounded-[100px] flex justify-center items-center w-[40px] h-[40px]">
                    <Image alt="arrow" src={ArrowTop} />
                  </div>
                </div>
                <p className="text-white font-worksans text-[16px] mt-[8px]">
                  {key?.description}
                </p>
              </div>
            
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ServicesAccordion;
