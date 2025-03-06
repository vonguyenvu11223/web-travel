import ImageCustom from '@/components/image-custom';
import { Link } from '@/navigation';
import * as React from 'react';
import DestinationWidgetItem from './DestinationWidgetItem';

export interface IDestinationWidgetItemProps {
  widget: any;
}

export default function ListingDestination({
  widget,
}: IDestinationWidgetItemProps) {
  return (
    <div className="grid grid-cols-1">
      {widget?.data &&
        widget.data.length > 0 &&
        widget?.data.map((item: any) => {
          return (
            <Link
              href={`/tours/${item?.alias}`}
              key={item?.alias}
              aria-label={item?.title}>
              <span className="md:py-1 py-3 block text-sm text-text1 hover:underline">
                {item?.title}
              </span>
            </Link>
          );
        })}
    </div>
  );
}
