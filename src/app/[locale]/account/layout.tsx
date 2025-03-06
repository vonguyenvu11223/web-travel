import * as React from "react";
import SideBarAccount from "./sidebar";
import { NextAuthProvider } from "@/components/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOptions";
import { redirect } from "next/navigation";
import NextIntlProvider from "@/components/providers/NextIntlProvider";

export interface ILayoutAccountProps {}

export default async function LayoutAccount({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  
  return (
    <>
      <div className="container flex gap-5 py-10 ">
        <NextAuthProvider session={session}>
          <SideBarAccount />
          <NextIntlProvider>{children}</NextIntlProvider>
        </NextAuthProvider>
      </div>
    </>
  );
}
