"use client";
import * as React from "react";
import { IconStar } from "../../icons";
import ReviewItem from "./review-item";


export default function TourReviews({ data }: {data: any}) {
  // console.log('filter', filter);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const reviews = data.reviews_content;

  console.log('reviews', reviews);
  
  return (
    <div className="w-full py-5 mx-auto lg:w-3/4">
      <h1 className="mb-8 text-[1.6rem] font-bold text-text1">Reviews</h1>
      <div className="flex flex-col items-start gap-5 mb-10 md:flex-row">
        <div className="w-full md:w-1/4">
          <div className="flex gap-2 mb-2">
            <span className="text-4xl font-bold">
              {data.rating?.toFixed(2) || 0}
            </span>
            <div className="relative flex items-center">
              {[1, 2, 3, 4, 5].map((i) => {
                return <IconStar key={i} className="w-6 h-6 fill-yellow-400" />;
              })}
              <div
                className={`absolute right-0 top-0 h-full overflow-hidden bg-white mix-blend-color`}
                style={{
                  width: `${(100 - ((data.rating || 0) * 100) / 5).toFixed(
                    0,
                  )}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="text-sm font-medium text-text1">
            {data.reviews || 0} reviews
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/4">
          <p className="mb-3 text-sm text-text1">
            Total review count and overall rating based on true reviews
          </p>
          
        </div>
      </div>
      <div ref={scrollRef}>
        <div className="mb-2 font-semibold text-text1">
          Reviews by our travelers
        </div>
      </div>
      {
        reviews?.map((item:any) => {
          return <ReviewItem key={item.id} data={item} />;
        })}
      {/* pagination  */}
      
    </div>
  );
}
