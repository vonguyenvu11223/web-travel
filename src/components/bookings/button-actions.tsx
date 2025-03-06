'use client';
import * as React from 'react';
import { Button } from '../ui/button';
import ContactOperator from '../bookings/contact-operator';
import { OrderProps } from '@/types';
import appConfig from '@/config';
import { useRouter } from 'next/navigation';
import { OrderStatus } from '@/types/enum';
import dayjs from 'dayjs';
export interface IButtonBookingProps {
  data: OrderProps;
  token?: string | null;
  onReload?: () => void;
  is_get_ticket?: boolean;
  is_cancel?: boolean;
  is_view_detail?: boolean;
  is_review?: boolean;
  is_download?: boolean;
}

export default function ButtonActions(props: IButtonBookingProps) {
  const {
    data: booking,
    token,
    onReload,
    is_get_ticket = false,
    is_cancel = false,
    is_view_detail = false,
    is_review = false,
    is_download = false,
  } = props;
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();
  let tour = booking.option.tour;
  const handleGetTicket = () => {
    router.push(`/${`ticket/${booking.order_no}`}`);
  };

  const handleCancelOrder = async () => {
    
  };

  const handleViewOrderDetail = () => {
  };

  const onClickReview = () => {
  };

  const handleDownload = async () => {
    
  };
  return (
    <div className="flex flex-col w-full gap-3 ml-auto md:w-auto">
      {is_get_ticket && (
        <Button
          type="submit"
          onClick={handleGetTicket}
          disabled={booking.order_status === OrderStatus.CANCELLED}
          className="w-full h-auto text-sm font-normal text-white">
          Get ticket
        </Button>
      )}
      {is_download && (
        <Button
          type="submit"
          onClick={handleDownload}
          loading={loading}
          className="w-full h-auto text-sm font-normal text-white">
          Download
        </Button>
      )}
      {is_cancel &&
        dayjs(booking.depart_date).isAfter(dayjs(), 'day') &&
        booking.order_status !== OrderStatus.CANCELLED && (
          <Button
            type="submit"
            onClick={handleCancelOrder}
            loading={loading}
            variant="secondary"
            className="w-full h-auto text-sm font-normal text-white">
            Cancel
          </Button>
        )}
      {is_view_detail && (
        <Button
          type="submit"
          onClick={handleViewOrderDetail}
          variant="outline"
          disabled={booking.order_status === OrderStatus.CANCELLED}
          className="w-full h-auto text-sm font-normal text-text1">
          View detail
        </Button>
      )}
      {is_review && booking?.is_available ? (
        <Button
          type="submit"
          onClick={onClickReview}
          variant="outline"
          disabled={booking.order_status === OrderStatus.CANCELLED}
          className="w-full h-auto text-sm font-normal text-text1">
          Review
        </Button>
      ) : null}
      <ContactOperator
        disabled={booking.order_status === OrderStatus.CANCELLED}
        data={tour}
      />
    </div>
  );
}
