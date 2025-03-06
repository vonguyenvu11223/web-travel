import ReadMore from "@/components/Form/ReadMore";
import { IconStar } from "@/components/icons";
import { ReviewProps } from "@/types";
import React from "react";
import Image from 'next/image';

const ReviewItem = ({ review }: { review: any }) => {
  return (
    <div className="flex flex-col gap-4 w-full rounded-lg bg-white p-5 shadow-md sm:p-6 lg:p-8">
      {/* Header: Avatar and Author */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden border border-gray-300 bg-gray-100">
          <Image
            src={review.avatar}
            alt={review.author}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-lg sm:text-xl text-gray-800">
            {review.author}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="text-lg sm:text-xl font-semibold text-gray-900">
        {review.title}
      </div>

      {/* Rating */}
      <div className="relative flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <IconStar key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400" />
        ))}
        <div
          className="absolute right-0 top-0 h-full overflow-hidden bg-white mix-blend-color"
          style={{
            width: `${(100 - (Number(review.rating) * 100) / 5).toFixed(0)}%`,
          }}
        ></div>
      </div>

      {/* Description */}
      <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
        <ReadMore>{review.description}</ReadMore>
      </div>
    </div>
  );
};

export default ReviewItem;
