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
      className="relative flex w-full bg-white rounded-lg shadow-xl dark:shadow-2xl md:rounded-full "
    >
      <div className="flex flex-col items-start w-full tour-search-one__inner gap-x-5 lg:flex-row lg:items-center">
        <div className="relative flex flex-col items-center justify-center w-full p-2 md:flex-row md:p-0">
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
          <div className="relative w-full mb-3 md:mb-0 md:w-1/2">
            <DatePicker
              keyD={datePickerKey}
              name="date"
              className="w-full h-full border-none rounded-full text-text1"
              placeholder={t("select_date")}
              autoFocus={focus}
              is_footer
              // value={value ? new Date(value) : undefined}
              clear
            />

            <Button
              type="submit"
              className="absolute hidden w-10 h-10 px-0 py-0 font-semibold text-white -translate-y-1/2 rounded-full right-5 top-1/2 bg-primary md:inline-flex"
              aria-label={"Search"}
            >
              <IconSearch className="w-4 h-4 font-semibold fill-white" />
            </Button>
          </div>
          <Button
            type="submit"
            className="inline-flex w-full h-10 font-semibold text-white rounded-lg bg-primary md:hidden"
            aria-label={"Search"}
          >
            <IconSearch className="w-4 h-4 font-semibold fill-white" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TourSearch;
