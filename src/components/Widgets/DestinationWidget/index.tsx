import * as React from 'react';
import { LayoutType } from '@/types/enum';
import GridDestination from './GridDestination';
import ListingDestination from './ListingDestination';
import destinationData from "@/data/destinationData";

export interface IDestinationWidgetProps {
  className?: string;
  code: string;
  locale?: string;
}

export default async function DestinationWidget({
  className,
  code,
  locale,
}: IDestinationWidgetProps) {
  

 const widget=destinationData
  return (
    <>
      {widget.layout === LayoutType.GRID ? (
        <>
          <div className={`${className}`}>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-text1">{widget?.title}</h2>
              <div className="mt-2 flex items-center justify-center text-primary cursor-pointer">
                <span className="mr-2">View all destination</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <GridDestination widget={widget} />
          </div>
        </>
      ) : widget.layout === LayoutType.LISTING ? (
        <>
          <div className="mb-4 text-lg font-semibold text-primary">
            {widget?.title}
          </div>
          <ListingDestination widget={widget} />
        </>
      ) : null}
    </>
  );
}
