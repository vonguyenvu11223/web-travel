'use client';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

type selectPops = {
  id: number;
  label: string;
  value: string;
};

export function SelectSort() {
  const t = useTranslations('tour');

  const dataSoft: selectPops[] = [
    {
      id: 1,
      label: t('featured'),
      value: 'featured',
    },
    {
      id: 2,
      label: t('high_to_low'),
      value: 'high_to_low',
    },
    {
      id: 3,
      label: t('low_to_high'),
      value: 'low_to_high',
    },
  ];
  const router = useRouter();
  const searchParams = useSearchParams();
  const valueS = searchParams.get('soft_by');
  const handleChangeSelectSoft = (value: string) => {
    if (typeof window !== 'undefined') {
      let queryParams = new URLSearchParams(window.location.search);
      queryParams.set('soft_by', value);
      const path = window.location.pathname + '?' + queryParams.toString();
      router.push(`/${path.substring(1)}`, { scroll: false });
    }
  };
  return (
    <Select
      onValueChange={handleChangeSelectSoft}
      value={valueS ? valueS : undefined}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('sort_by')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {dataSoft.length > 0 &&
            dataSoft.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
