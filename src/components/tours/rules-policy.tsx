"use client";
import * as React from "react";
import Modal from "../modal";
import { TourCancellationPolicyProps, TourProps } from "@/types";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
const _ = require("lodash");

interface IRulesSoftProps {
  data?: TourProps;
  title?: string;
  date?: string | undefined;
}

export default function RulesPolicy({
  data,
  title = "Learn more",
  date,
}: IRulesSoftProps) {
  let cancellation_policies = _.cloneDeep(
    data?.cancellation_policies,
  ) as TourCancellationPolicyProps[];

  if (!cancellation_policies || cancellation_policies.length < 1) {
    return <p>Not found free cancellation policy</p>;
  }

  const totalPolicy = cancellation_policies.length + 1;

  return (
    <Modal
      header={<>{title}</>}
      title="Cancellation Policy"
      className="md:min-w-[600px]"
      classNameTitle="text-sm underline"
      content={
        <>
          <div
            className={cn("mb-10 hidden md:grid")}
            style={{
              gridTemplateColumns: `repeat(${totalPolicy}, minmax(0, 1fr))`,
            }}
          >
            {cancellation_policies.map(
              (item: TourCancellationPolicyProps, index: number) => (
                <div key={item.id}>
                  {date ? (
                    <div className="text-sm text-end">
                      {dayjs(date)
                        .subtract(item.policy.hours || 0, "hour")
                        .format("MMMM D")}
                    </div>
                  ) : (
                    <div className="text-sm text-end">
                      {dayjs()
                        .add(1, "day")

                        .subtract(item.policy.hours || 0, "hour")
                        .format("MMMM D")}
                    </div>
                  )}
                  <div
                    className={cn(
                      "after:t-0 relative py-2 text-center text-sm font-semibold text-black after:absolute after:right-0 after:h-12 after:w-1 after:-translate-y-1/4",
                      index % 3 === 0
                        ? "bg-green-300 after:bg-green-300"
                        : index % 3 === 1
                          ? "bg-yellow-300 after:bg-yellow-300"
                          : "bg-red-300 after:bg-red-300",
                      index === 0 && "rounded-l-lg",
                    )}
                  >
                    {`${100 - item.cancel_fee}% refund`}
                  </div>
                </div>
              ),
            )}
            <div>
              <div className="text-sm text-end">
                {date
                  ? dayjs(date).format("MMMM D")
                  : dayjs().add(1, "day").format("MMMM D")}
              </div>
              <div className="py-2 text-sm font-semibold text-center bg-red-400 rounded-r-lg">
                No refund
              </div>
            </div>
          </div>
          {data?.cancellation_policy_summary && (
            <div
              className="text-sm post-content policy-content"
              dangerouslySetInnerHTML={{
                __html: data?.cancellation_policy_summary,
              }}
            />
          )}
        </>
      }
    />
  );
}
