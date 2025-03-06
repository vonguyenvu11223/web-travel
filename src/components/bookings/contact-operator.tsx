import * as React from 'react';
import { Button } from '../ui/button';
import { TourProps } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

export interface IContactOperatorProps {
  data: TourProps;
  disabled?: boolean;
}

export default function ContactOperator({
  data,
  disabled = false,
}: IContactOperatorProps) {
  const [openModal, setOpen] = React.useState<boolean>(false);
  const onOpenChange = (value: boolean) => {
    setOpen(value);
  };
  return (
    <Dialog open={openModal} onOpenChange={onOpenChange}>
      <Button
        type="submit"
        onClick={() => setOpen(true)}
        variant="outline"
        disabled={disabled}
        className="w-full h-auto text-sm font-normal text-text1"
      >
        Contact Tour Operator
      </Button>
      {/* max-w-full max-h-full inset-0 translate-x-0 translate-y-0 */}
      <DialogContent
        className={`sm:max-w-full md:w-auto sm:max-h-full md:h-auto inset-0 `}
      >
        <DialogHeader>
          <DialogTitle className="mb-5">Operator Information</DialogTitle>
          <>
            <div className="flex flex-col gap-2">
              <div>Connecting Plus</div>
              <div>
                Fullname: {data?.operator?.firstname} {data?.operator?.lastname}
              </div>
              <div>
                Email:{' '}
                <a href={`mailto:${data?.operator?.email}`}>
                  {data?.operator?.email}
                </a>
              </div>
              <div>
                Phone:{' '}
                <a href={`tel:+${data?.operator?.phone}`}>
                  {data?.operator?.phone}
                </a>
              </div>
            </div>
          </>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
