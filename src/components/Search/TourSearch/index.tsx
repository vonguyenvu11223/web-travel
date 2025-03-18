"use client";
import React, { useState } from "react";
// import dayjs from 'dayjs';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IconSearch } from "@/components/icons";

import LocationInput, { ValueProps } from "./LocationInput";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useTranslations } from "next-intl";
import { DatePicker } from "./DatePicker";
import SearchData from "@/data/searchData";

const TourSearch = () => {
  const t = useTranslations("index");

  const router = useRouter();
  const locations = SearchData as ValueProps[];
  const [error, setError] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [datePickerKey, setDatePickerKey] = useState<number>(0);
  const [value, setValue] = useLocalStorage("date", "");
  const handleSelectLocation = (ValueProps: ValueProps) => {
    if (ValueProps) {
      setError(false);
      setFocus(true);
      setDatePickerKey((prevKey) => prevKey + 1);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full rounded-lg bg-white shadow-xl dark:shadow-2xl md:rounded-full "
    >
      <div className="tour-search-one__inner flex w-full flex-col items-start gap-x-5 lg:flex-row lg:items-center">
        <div className="relative flex w-full flex-col items-center justify-center p-2 md:flex-row md:p-0">
          {/* select destinations */}
          <LocationInput
            name="location"
            className={`w-full bg-white ${
              error && "border-2 border-red-500"
            } mb-3 rounded-full text-text1 md:mb-0 md:w-1/2 `}
            error={error}
            handleSelect={handleSelectLocation}
            data={(locations && locations) || []}
          />
          <div className="mx-[1px] hidden h-8 self-center border-r border-slate-200 dark:border-slate-700 md:block"></div>
          {/* select return date */}
          <div className="relative mb-3 w-full md:mb-0 md:w-1/2">
            <DatePicker
              keyD={datePickerKey}
              name="date"
              className="h-full w-full rounded-full border-none text-text1"
              placeholder={t("select_date")}
              autoFocus={focus}
              is_footer
              // value={value ? new Date(value) : undefined}
              clear
            />

            <Button
              type="submit"
              className="absolute right-5 top-1/2 hidden h-10 w-10 -translate-y-1/2 rounded-full bg-primary px-0 py-0 font-semibold text-white md:inline-flex"
              aria-label={"Search"}
            >
              <IconSearch className="h-4 w-4 fill-white font-semibold" />
            </Button>
          </div>
          <Button
            type="submit"
            className="inline-flex h-10 w-full rounded-lg bg-primary font-semibold text-white md:hidden"
            aria-label={"Search"}
          >
            <IconSearch className="h-4 w-4 fill-white font-semibold" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TourSearch;
