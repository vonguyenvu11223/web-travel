"use client";
import * as React from "react";
import Bookings from "./bookings/page";
import NextIntlProvider from "@/components/providers/NextIntlProvider";

export interface IAppProps {}

export default function Account(props: IAppProps) {
  return (
    <>
      <Bookings />
    </>
  );
}
