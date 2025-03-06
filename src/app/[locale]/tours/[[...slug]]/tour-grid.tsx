import { SelectSort } from "../../../../components/tours/select-sort";
import { TourProps } from "@/types";
import { DataFilter } from "@/types/filter";
import ClearFilter from "../../../../components/tours/clear-filter";

import { useTranslations } from "next-intl";
import { IToursSearchProps } from "@/app/[locale]/tours/[[...slug]]/page";
import NextIntlProvider from "../../../../components/providers/NextIntlProvider";
import Pagination from "@/components/common/pagination";
import TourItem from "@/components/Widgets/TourWidget/Item";

export interface ITourListProps {
  data: DataFilter<TourProps>;
  searchParams?: IToursSearchProps;
}

export default function TourGrid(data:any) {
  const t = useTranslations("tour");
  return (
    <>
      <div className="mb-5 flex flex-col bg-[#f2f4f4] p-4 lg:rounded items-start justify-between gap-5 lg:mb-2 lg:flex-row lg:items-center">
        <div className="flex items-center gap-x-3 text-sm">
          <span>{t("results_txt", { results: data.data.length })} </span>
          <span className="font-semibold text-text2">|</span>
          <NextIntlProvider>
            <ClearFilter />
          </NextIntlProvider>
        </div>
        <div className="flex items-center gap-x-5">
          
          <NextIntlProvider>
            <SelectSort />
          </NextIntlProvider>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data.data &&
          data.data.length > 0 &&
          data.data.map((item: any) => (
            <TourItem  item={item} />
          ))}
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-4">
        <Pagination></Pagination>
      </div>
    </>
  );
}
