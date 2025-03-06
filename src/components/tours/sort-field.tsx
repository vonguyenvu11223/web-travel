'use client';
import * as React from 'react';
import Modal from '../modal';
import { useTranslations } from 'next-intl';


export default function SortField() {
  const t = useTranslations('tour');
  return (
    <Modal
      header={<>{t('sort_order')}</>}
      title={t('sort_order_title')}
      classNameTitle="text-sm underline"
      content={
        <>
          <p>{t('sort_order_text1')}</p>
          <p>{t('sort_order_text2')}</p>
          <p>{t('sort_order_text3')}</p>
          <p>{t('sort_order_text4')}</p>
          <p>{t('sort_order_text5')}</p>
        </>
      }
    />
  );
}
