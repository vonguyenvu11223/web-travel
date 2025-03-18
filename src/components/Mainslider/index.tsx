import * as React from "react";
import TourSearch from "../Search/TourSearch";
import SwiperSlider from "./swiper-slider";
import NextIntlProvider from "../providers/NextIntlProvider";
import { getTranslations } from "next-intl/server";
const bg1 =
  "https://res.cloudinary.com/drnf8u8vq/image/upload/f_auto,q_auto/v1/kapanda/slide/ha-long-bay";
import Image from "next/image";

// const { subTitle, title, bottomText, slides } = slideMobile;
export interface IMainsliderProps {
  // isMobile: '' | RegExpMatchArray | null;
}

export default async function Mainslider(props: IMainsliderProps) {
  const t = await getTranslations("index");

  return (
    <div className="relative h-[55vh] w-full md:h-[60vh] ">
      <div className="hidden h-full w-full md:block">
        <SwiperSlider />
      </div>

      <div className="block h-full w-full md:hidden">
        <Image
          src={bg1}
          className="h-full w-full object-cover"
          key={Math.random()}
          alt="Nextjs travel booking theme"
          loading="eager"
          priority={true}
          width={511}
          height={302}
        />
      </div>

      {/* Tour */}
      <div className="container absolute bottom-1/2 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 flex-col text-center text-white md:bottom-1/2 lg:h-auto">
        {/* <p className="mb-4 text-sm md:text-base md:mb-2 text-secondary">
          Website is under development
        </p> */}
        <h1 className="mb-4 text-2xl font-semibold md:mb-12 md:text-3xl lg:text-4xl">
          {t("banner_title")}
        </h1>
        {/* <p className="mb-10 md:text-lg">{t('banner_sub_title')}</p> */}
        <NextIntlProvider>
          <div className="container">
            <div className="z-30 mx-auto  w-full md:block lg:w-[800px]">
              <TourSearch />
            </div>
          </div>
        </NextIntlProvider>
      </div>
      <div className="absolute inset-0 z-10 bg-transparent_dark"></div>
    </div>
  );
}
