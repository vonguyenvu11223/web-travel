import ImageCustom from '@/components/image-custom';
import { Link } from '@/navigation';
import * as React from 'react';
import DestinationWidgetItem from './DestinationWidgetItem';

export interface IDestinationWidgetItemProps {
  widget: any;
}

export default function GridDestination({
  widget,
}: IDestinationWidgetItemProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {widget?.data &&
          widget.data.length > 0 &&
          widget?.data.map((item: any) => {
            return <DestinationWidgetItem item={item} key={item} />;
          })}
      </div>
    </>
  );
}
