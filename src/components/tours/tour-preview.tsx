import * as React from 'react';
import { IconMapPin } from '../icons';
import Image from 'next/image';
import { DestinationsProps } from '@/types';

export interface ITourPreviewProps {
  destination: DestinationsProps;
}

export default function TourPreview({ destination }: ITourPreviewProps) {
  return (
    <div className="w-full h-full md:h-72">
      <div className="h-full md:relative">
        <div className="hidden w-full overflow-hidden md:absolute md:inset-0 md:block">
          <Image
            src={destination.cover_image}
            className="object-cover w-full h-full filter-blur "
            width={1000}
            height={1000}
            alt={destination.title}
          />
        </div>
        <div className="w-full bg-white md:-translate-x-1/2 md:absolute md:shadow-2xl md:w-2/3 top-1/4 left-1/2 rounded-xl">
          <div className="grid w-full h-full grid-cols-1 md:grid-cols-2">
            <div className="w-full h-[300px]">
              <Image
                src={destination.cover_image}
                width={1000}
                height={1000}
                className="object-cover w-full h-full md:rounded-tl-xl md:rounded-bl-xl"
                alt={destination.title}
              />
            </div>
            <div className="flex flex-col p-5">
              <h1 className="mb-3 text-xl font-bold text-text1">
                {destination.title}
              </h1>
              <div className="mb-5 content-des_tour">
                {destination.description && (
                  <div
                    className="content-des_tour"
                    dangerouslySetInnerHTML={{
                      __html: destination.description,
                    }}
                  />
                )}
              </div>
              <div className="flex mt-auto gap-x-3">
                <IconMapPin className="fill-primary" />{' '}
                <span className="font-medium">
                  {destination.title}, {destination.country.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
