"use client"
import PrimaryButton from "../PrimaryButton";
import rightArrow from "@/app/assets/svgs/arrow-right.svg";
import SliderTransformation from "./SliderTransformation";
import transformation1 from "@/app/assets/images/transformation-1.png";
import transformation2 from "@/app/assets/images/transformation-2.png";
import { useRef, useState } from "react";

const sliderData = [
  {
    id: 1,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "12 Weeks Later",
  },
  {
    id: 2,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "8 Weeks Later",
  },
  {
    id: 3,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "8 Weeks Later",
  },
  {
    id: 4,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "8 Weeks Later",
  },
];

function Transformation() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = sliderRef.current;
    if (!el) return;

    setIsDown(true);
    el.classList.add("cursor-grabbing");

    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseUp = () => {
    const el = sliderRef.current;
    if (!el) return;

    setIsDown(false);
    el.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = sliderRef.current;
    if (!isDown || !el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  return (
    <div className="lg:px-[100px] px-[20px] py-[70px]">
      <div className=" flex lg:flex-row flex-col md:justify-between justify-center items-center lg:gap-0 gap-[30px] w-full lg:mb-0 lg:mb-10 mb-0 w-full">
        <h2 className="md:w-[600px] text-center lg:leading-17 sm:leading-16 leading-10 font-nudgetrial font-bold sm:text-[50px] text-[40px] md:text-[64px] lg:text-start text-center">
          Real Transformations, Lasting Results
        </h2>
        <div className="flex md:justify-start justify-center">
          <PrimaryButton
            className={" cursor-pointer h-fit"}
            title={"See More Transformations"}
            image={rightArrow}
          />
        </div>
      </div>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-x-auto w-full flex-nowrap custom-scroll"
      >
        {sliderData.map((item) => (
          <SliderTransformation key={item.id} data={item} />
        ))}
      </div>{" "}
    </div>
  );
}

export default Transformation;
