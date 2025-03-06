'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

export interface IClearFilterProps {}

export default function ClearFilter(props: IClearFilterProps) {
  const t = useTranslations('tour');
  const router = useRouter();
  const pathname = usePathname();

  const handleClearFilter = () => {
    router.push(`/${pathname.substring(1)}`, { scroll: false });
  };

  return (
    <span className="underline cursor-pointer" onClick={handleClearFilter}>
      {t('clear_filter')}
    </span>
  );
}
