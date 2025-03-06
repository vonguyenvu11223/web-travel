"use client";
import * as React from "react";
import bannerTwo from "@/data/bannerTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const { subTitle, title, bottomText, slides } = bannerTwo;
export interface ISwiperSliderProps {}

export default function SwiperSlider(props: ISwiperSliderProps) {
  return (
    <>
      <Swiper
        speed={1500}
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="h-full w-full"
      >
        {slides.length > 0 &&
          slides.map((item, index) => (
            // <Image
            //   src={item}
            //   width="2000"
            //   className="object-cover w-full h-full"
            //   key={index}
            //   alt='Slide'
            // />
            // <SwiperSlide key={index}>
            //   <div className='w-full h-full'>
            //     <Image
            //       src={item}
            //       layout='cover'
            //       alt=""
            //     />
            //   </div>
            // </SwiperSlide>
            <SwiperSlide key={item}>
              <img
                src={item}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* <div className="swiper-lazy-preloader"></div> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
