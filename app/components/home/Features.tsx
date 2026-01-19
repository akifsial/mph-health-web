"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import dummbellsIcon from "@/app/assets/svgs/dumbbells.svg";
import Image from "next/image";

function Features() {
  return (
    <div className="h-[95px] bg-[#EEEEEE] ps-[32px] pe-[32px] flex items-center justify-center font-nudgetrial font-bold ">
      {/* <Swiper
        slidesPerView="3"
        spaceBetween={20}
        className="w-full flex justify-center "
        freeMode={true}
        // modules={[FreeMode]}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="w-[250px]">
          <div className="flex justify-between gap-5">
            <p className="text-[22px]">Evidence-Based Coaching</p>
            <Image src={dummbellsIcon} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-[250px]">
          <div className="flex justify-center">
            <p className="text-[22px]">Physique Transformation Experts</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-[250px]">
          <div className="flex justify-center">
            <p className="text-[22px]">Evidence-Based Coaching</p>
            
          </div>
        </SwiperSlide>
      </Swiper> */}

      <Swiper

        slidesPerView="2"
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="w-full"
         breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }}}
      >
        <SwiperSlide className="w-auto">
          <div className="flex items-center gap-6">
            <p className="text-[22px] whitespace-nowrap">
              Evidence-Based Coaching
            </p>

            <Image src={dummbellsIcon} alt="icon" className="w-6 h-6" />

            <p className="text-[22px] whitespace-nowrap">
              Hormone & Gut Health Optimization
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-auto">
          <div className="flex items-center gap-6">
            <p className="text-[22px] whitespace-nowrap">
              Physique Transformation Experts
            </p>

            <Image src={dummbellsIcon} alt="icon" className="w-6 h-6" />

            <p className="text-[22px] whitespace-nowrap">
              Evidence-Based Coaching
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-auto">
          <div className="flex items-center gap-6">
            <p className="text-[22px] whitespace-nowrap">
              Physique Transformation Experts
            </p>

            <Image src={dummbellsIcon} alt="icon" className="w-6 h-6" />

            <p className="text-[22px] whitespace-nowrap">
              Evidence-Based Coaching
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Features;
