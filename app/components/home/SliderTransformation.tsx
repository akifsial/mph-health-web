import Image from "next/image";
import React from "react";

function SliderTransformation({ data }) {
  return (
    <div className="mt-10 w-fit flex-shrink-0">
      <div className="relative flex rounded-[16px] overflow-hidden">

        {/* BEFORE */}
        <div className="relative">
          <Image
            className="object-cover"
            src={data.beforeImage}
            alt="before"
          />
          <div className="absolute bottom-0 mb-[10px] ms-[10px] py-[10px] pb-[6px] px-[13px] text-black rounded-[8px] font-nudgetrial font-bold text-[16px] bg-white">
            BEFORE
          </div>
        </div>

        {/* AFTER */}
        <div className="relative">
          <Image
            className="object-cover"
            src={data.afterImage}
            alt="after"
          />
          <div className="absolute bottom-0 mb-[10px] ms-[10px] py-[10px] pb-[6px] px-[13px] text-black rounded-[8px] font-nudgetrial font-bold text-[16px] bg-white">
            AFTER
          </div>
        </div>

        {/* CENTER LABEL */}
        <div className="absolute font-nudgetrial flex justify-center w-full">
          <div className="w-fit bg-[#00000033] font-normal rounded-b-[12px] backdrop-blur-[26px] text-white px-[24px] py-[10px]">
            {data.label}
          </div>
        </div>

      </div>
    </div>
  );
}

export default SliderTransformation;