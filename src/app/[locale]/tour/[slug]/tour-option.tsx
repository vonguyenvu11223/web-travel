"use client";

import * as React from "react";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";
import { CurrencyFormatter } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Route } from "next";

interface TourOptionProps {
  data: any[];
}

export default function TourOption({ data }: TourOptionProps) {
  const t = useTranslations("tour");
  const router = useRouter();

  const handleBook = (optionId: number) => {
    router.push(`/buynow/checkout` as Route);
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold mb-4 mt-4">Tour Price Options</h2>
      {data.length > 0 &&
        data.map((option, index) => {
          const totalPrice = CurrencyFormatter("en-US", option.price);
          return (
            <div
              key={option.id}
              className="z-10 cursor-pointer rounded-lg border-2 border-gray-300 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full border-b border-slate-300 md:w-2/3 md:border-b-0 md:border-r">
                  <div className="p-4 md:p-6">
                    <div className="inline-block p-1 mb-5 font-bold bg-gray-300 rounded-md text-text1">
                      {t("option_nb", { number: index + 1 })}
                    </div>
                    <h2 className="mb-1 text-xl font-bold text-text1">
                      {option.title}
                    </h2>
                    <div
                      className="mb-3 option-desc"
                      dangerouslySetInnerHTML={{ __html: option?.description }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col justify-between h-full p-4 md:p-6">
                    <div className="flex flex-col items-end mb-5 text-end text-text1">
                      <span className="text-lg font-semibold">
                        {totalPrice}
                      </span>
                    </div>
                    <Button
                      className="w-full mt-auto font-bold text-white bg-blue-500 hover:bg-blue-600"
                      onClick={() => handleBook(option.id)}
                    >
                      {t("book_now")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
