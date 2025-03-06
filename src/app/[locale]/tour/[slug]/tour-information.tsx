import React from "react";
import { ItineraryProps, TourProps } from "@/types";
import Timeline from "../../../../components/timeline";
import { useTranslations } from "next-intl";


export default function TourInformation({ data }: {data:any}) {
  const t = useTranslations("tour");
  return (
    <div className="w-full mx-auto lg:w-3/4">
      <div className="pb-5  md:pt-5">
        <h2 className="mb-5 text-[1.4rem] font-bold text-text1 md:text-[1.6rem]">
          {t("overview")}
        </h2>
        {data.description && (
          <div
            className="content-global"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
      </div>
      {(!!data.inclusion || !!data.exclusion) && (
        <div className="py-5 border-b border-slate-300 md:pt-10">
          <h2 className="mb-5 text-[1.4rem] font-bold text-text1 md:text-[1.6rem]">
            Inclusions & Exclusions
          </h2>
          <div className="flex flex-col gap-0 text-text1 md:flex-row md:gap-12">
            <div className="w-full md:w-1/2">
              {!!data.inclusion && (
                <>
                  <strong>{"What's Included"}</strong>

                  <div
                    className="content-global"
                    dangerouslySetInnerHTML={{
                      __html: data.inclusion,
                    }}
                  ></div>
                </>
              )}
            </div>
            <div className="w-full md:w-1/2">
              {!!data.exclusion && (
                <>
                  <strong>{"What's Excluded"}</strong>

                  <div
                    className="content-global"
                    dangerouslySetInnerHTML={{
                      __html: data.exclusion,
                    }}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {
        <>
          <div className="py-5 border-b border-slate-300 md:py-10">
            <h2 className="mb-5 text-[1.4rem] font-bold text-text1 md:text-[1.6rem]">
              {t("meeting_pickup")}
            </h2>
            <p className="mb-5 ">{t("meeting_pickup_sub")}</p>

            {data.meeting_point && (
              <>
                <h2 className="mb-5 text-lg font-bold text-text1">
                  {t("meeting_point")}
                </h2>
                <div
                  className="content-global"
                  dangerouslySetInnerHTML={{ __html: data.meeting_point }}
                />
              </>
            )}
            {data.meeting_point_notes && (
              <div
                className="content-global"
                dangerouslySetInnerHTML={{ __html: data.meeting_point_notes }}
              />
            )}
            
          </div>
        </>
      }

      {
      data.itineraries &&
      data.itineraries?.length > 0 ? (
        <div className="py-5 border-b border-slate-300 md:pt-10">
          <Timeline
            mode="left"
            title={
              <h2 className="mb-5 text-[1.4rem] font-bold text-text1 md:text-[1.6rem]">
                {t("expect")}
              </h2>
            }
            items={data.itineraries.map((item: ItineraryProps) => ({
              label: item.title,
              children: (
                <React.Fragment>
                  {item.description && (
                    <div
                      className="text-base text-text1"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  )}
                  {item.ticket || (item.meals && item.meals.length > 0) ? (
                    <ul className="ml-10 list-disc">
                     
                      {item.meals && item.meals.length > 0 && (
                        <li className="mt-2 mb-0">
                          <p className="text-base text-text1">
                            {item.meals.map((meal, i) => (
                              <span key={i}>
                                {meal === "B" && "Breakfast"}
                                {meal === "L" && "Lunch"}
                                {meal === "D" && "Dinner"}
                              </span>
                            ))}
                          </p>
                        </li>
                      )}
                    </ul>
                  ) : null}
                </React.Fragment>
              ),
            }))}
          />
        </div>
      ) : null}
      {data?.additional_info && (
        <div className="pt-5 border-b border-slate-300 md:pt-10">
          <h2 className="mb-5 text-[1.4rem] font-bold text-text1 md:text-[1.6rem]">
            {t("additional_info")}
          </h2>
          <div
            className="content-global"
            dangerouslySetInnerHTML={{
              __html: data.additional_info,
            }}
          ></div>
        </div>
      )}

      <div className="pt-5  md:pt-10">
        <h2 className="mb-5 text-[1.4rem] font-bold text-text1 md:text-[1.6rem]">
          {t("cancellation_policy")}
        </h2>
        {data?.cancel_policy }
      </div>

      <hr className="my-5 border-slate-300" />
    </div>
  );
}
