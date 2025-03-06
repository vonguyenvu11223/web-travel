"use client";
import {
  IconCarLight,
  IconCheck,
  IconMapPin,
  IconSearch,
} from "@/components/icons";
import { Combobox, Transition } from "@headlessui/react";
import React, { useState, FC, Fragment } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useTranslations } from "next-intl";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  name?: string;
  handleSelect?: (item: ValueProps) => void;
  data?: ValueProps[];
  value?: ValueProps | null;
  error?: boolean;
}

export interface ValueProps {
  id?: number;
  title?: string;
  type?: "destination" | "tour";
  slug?: string;
}


const removeExtraSpace = (s: string) => s.trim().split(/ +/).join(" ");
const HeaderLocationInput: FC<LocationInputProps> = ({
  autoFocus = false,
  placeHolder = "Search for a place or activity",
  desc = "Where to?",
  className = "nc-flex-1.5",
  name,
  data,
  value: valueLocation,
  error = false,
  handleSelect = (ValueProps: ValueProps) => ValueProps,
}) => {
  const t = useTranslations("index");
  const [selected, setSelected] = useState<ValueProps | null>();
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);
  let dataSearch =
    data &&
    data?.length > 0 &&
    data.filter((person) => {
      return (
        person.title &&
        person.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
    });
  React.useEffect(() => {
    if (valueLocation && !selected) {
      setSelected(valueLocation);
      valueLocation?.title && setQuery(valueLocation?.title);
    }
    if (selected) {
      selected?.title && setQuery(selected?.title);
    }
  }, [valueLocation, selected]);

 

  const handleSelection = (value: ValueProps) => {
    setSelected(value);
    handleSelect(value);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const value = e.target.value;
    setQuery(value);
  };
  // console.log(isLoading, query, debouncedQuery, filteredPeople);
  return (
    <div className={`relative flex ${className}`}>
      <div
        className={`relative z-50 flex flex-1  flex-shrink-0 cursor-pointer items-center space-x-3 text-left focus:outline-none `}
      >
        <div className="flex-grow">
          <Combobox value={selected || ""} onChange={handleSelection}>
            <div>
              <Combobox.Button className="w-full border rounded-full cursor-pointer border-slate-300 ">
                <div className="[ nc-hero-field-padding ] relative flex w-full cursor-default items-center gap-x-1 overflow-hidden rounded-full bg-white !px-5 text-left sm:text-sm">
                  <div className="pr-3 text-neutral-300 dark:text-neutral-400">
                    <IconSearch className="w-4 h-4 fill-slate-700 lg:h-4 lg:w-4" />
                  </div>

                  <Combobox.Input
                    className="w-full text-sm font-semibold leading-5 text-gray-900 border-none outline-none placeholder-color focus:ring-0"
                    placeholder={t("search_for_place")}
                    autoComplete="off"
                    displayValue={(person: ValueProps) => person?.title || ""}
                    onChange={handleChangeInput}
                  />
                </div>
                {/* {selected && (
                  <ClearDataButton onClick={() => setSelected(null)} />
                )} */}
                <input
                  type="text"
                  name={name}
                  id={name}
                  value={JSON.stringify(selected) || ""}
                  readOnly={true}
                  placeholder={placeHolder}
                  className="hidden"
                />
              </Combobox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                // afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute mt-1  w-full !list-none  overflow-auto rounded-md bg-white !p-0 text-base  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm lg:w-[130%]">
                 
                  {dataSearch &&
                    debouncedQuery === "" &&
                    dataSearch.map((person) => (
                      <Combobox.Option
                        key={`${person.id}${person.title}`}
                        className={({ active }) =>
                          `relative !mb-0 cursor-pointer select-none py-3 pl-10 pr-4 ${
                            active ? "bg-slate-100 text-text1" : " text-text1"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center gap-5">
                              <span>
                                {person.type === "destination" ? (
                                  <IconMapPin className="fill-secondary" />
                                ) : (
                                  <IconCarLight className="fill-secondary" />
                                )}
                              </span>
                              <span className={`block truncate font-bold`}>
                                {person.title}
                              </span>
                            </div>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 text-primary`}
                              >
                                <IconCheck
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>
    </div>
  );
};

export default HeaderLocationInput;
