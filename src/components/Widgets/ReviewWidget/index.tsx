import WidgetProps from "@/types/widget";
import React from "react";
import ReviewItem from "./review-item";
import reviewData from "@/data/reviewData";
import Link from "next/link";

const ReviewWidget = async ({ className, code, locale }: WidgetProps) => {
  const widget = reviewData;

  if (!widget) return null;

  return (
    <div className={`py-12 sm:py-16 ${className}`}>
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-text1">
          {widget?.title}
        </h2>

        <Link
          href="/reviews"
          className="mt-4 flex items-center justify-center text-primary cursor-pointer hover:underline"
        >
          <span className="mr-2 text-sm sm:text-base">View all reviews</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Review Items */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {widget?.data &&
          widget.data.slice(0, 3).map((item: any) => (
            <ReviewItem key={item.id} review={item} />
          ))}
      </div>
    </div>
  );
};

export default ReviewWidget;
