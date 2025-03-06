import * as React from 'react';
import {
  IconClock,
  IconHandHoldingHeart,
  IconMessageSmile,
  IconMoneyBillTransfer,
} from '../icons';
import { useTranslations } from 'next-intl';

export interface IWhyChooseProps {
  className?: string;
}

export default function WhyChoose({ className }: IWhyChooseProps) {
  const t = useTranslations('index');
  return (
    <div className={`py-10 ${className}`}>
      <div className="mb-10 text-2xl font-semibold text-center text-text1">
        <h2>{t('why_choose_us')}</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 text-center bg-white border rounded-lg shadow-md">
          <IconMoneyBillTransfer className="w-8 h-8 mx-auto fill-primary" />
          <h2 className="p-2 text-xl font-semibold md:p-5 text-text1">
            {t('why_choose_1')}
          </h2>
          <p>{t('why_choose_1_text')}</p>
        </div>
        <div className="p-6 text-center bg-white border rounded-lg shadow-md">
          <IconMessageSmile className="w-8 h-8 mx-auto fill-primary" />
          <h2 className="p-2 text-xl font-semibold md:p-5 text-text1">
            {t('why_choose_2')}
          </h2>
          <p>{t('why_choose_2_text')}</p>
        </div>
        <div className="p-6 text-center bg-white border rounded-lg shadow-md">
          <IconHandHoldingHeart className="w-8 h-8 mx-auto fill-primary" />
          <h2 className="p-2 text-xl font-semibold md:p-5 text-text1">
            {t('why_choose_3')}
          </h2>
          <p>{t('why_choose_3_text')}</p>
        </div>
        <div className="p-6 text-center bg-white border rounded-lg shadow-md">
          <IconClock className="w-8 h-8 mx-auto fill-primary" />
          <h2 className="p-2 text-xl font-semibold md:p-5 text-text1">
            {t('why_choose_4')}
          </h2>
          <p>{t('why_choose_4_text')}</p>
        </div>
      </div>
    </div>
  );
}
