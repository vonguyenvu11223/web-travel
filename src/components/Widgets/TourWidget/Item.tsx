import { IconGlobe, IconStar } from "@/components/icons";
import ImageCustom from "@/components/image-custom";
import { CurrencyFormatter } from "@/lib/utils";
import { Link } from "@/navigation";
import * as React from "react";

export interface ITourPreviewProps {
  item?: any;
}

export default function TourItem({ item }: {item:any}) {
  let total_price_final = CurrencyFormatter("en-US", item.price.amount).replace(/\s*USD\s*/, '$');


  return (
    <div className="flex flex-col shadow-md rounded-b-md relative group">
      <Link
        href="#"
        aria-label={item?.title}
        className="relative h-[300px] w-full md:h-[240px] overflow-hidden"
      >
        {/* Image with hover zoom effect */}
        <ImageCustom
          src={`${item?.image?.src}`}
          image_alt={item?.title ? item.title : ""}
          className="rounded-t-md transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        {item?.featured && (
          <div className="absolute left-2 top-2 rounded bg-primary px-3 py-[2px] shadow">
            <span className="text-xs font-semibold text-white">
              Likely to Sell Out
            </span>
          </div>
        )}
      </Link>

      <div className="flex-1 p-4 sm:p-5">
        {/* Location */}
        <div className="flex items-center mb-2">
          <IconGlobe className="w-4 h-4 fill-text1" />
          <span className="ml-2 text-sm text-text1">{item?.locations}</span>
        </div>

        {/* Title */}
        <div className="mb-3">
          <Link
            href="#"
            aria-label={item?.title}
            className="inline-block w-full text-base sm:text-lg font-semibold text-text1 hover:underline"
          >
            {item?.title}
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="relative flex items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <IconStar key={i} className="w-4 h-4 fill-yellow-400" />
            ))}
            <div
              className="absolute right-0 top-0 h-full overflow-hidden bg-white mix-blend-color"
              style={{
                width: `${(
                  100 -
                  (Number(item?.rating) * 100) / 5
                ).toFixed(0)}%`,
              }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-text1">{item?.reviews || 0}</span>
        </div>
      </div>

      {/* Price */}
      <div className="absolute bottom-3 right-3 text-right">
        <span className="text-xs text-text1">from</span>
        <span className="ml-1 text-lg font-bold text-primary">
          {total_price_final}
        </span>
      </div>
    </div>
  );
}
