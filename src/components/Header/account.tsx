"use client";
import * as React from "react";

import { Link } from "@/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { signOut, useSession } from "next-auth/react";
import { UserSession } from "@/types";
import {
  IconArrowRightFromBracket,
  IconBookBookmark,
  IconChevronDown,
  IconCircleUser,
  IconUser,
} from "../icons";
import { useTranslations } from "next-intl";

export interface IAccountProps {
  openMenu?: () => void;
  session?: any;
}

export default function Account({ openMenu, session }: IAccountProps) {
  const t = useTranslations("account");
  // const { data: session } = useSession();
  let user = session && (session.user as UserSession | null);
  // console.log('account', user);
  let login = "login";
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={(user && user.firstname + user.lastname) || "Aria Name"}
          className="relative z-50 flex items-center gap-x-1 rounded-full border-[1px] border-slate-300 fill-slate-200 p-2  text-base outline-none lg:px-2 lg:py-1"
        >
          {session ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary uppercase text-white">
              {session && session?.user && session.user
                ? `${user && user.firstname.charAt(0)}${
                    user && user.lastname.charAt(0)
                  }`
                : ""}
            </div>
          ) : (
            <IconCircleUser className="h-8 w-8 rounded-full bg-slate-400 fill-inherit" />
          )}
          <IconChevronDown
            className="relative top-[1px] ml-1 h-2 w-2 fill-text1 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="relative z-100 px-4 py-3">
          {!session && (
            <>
              <DropdownMenuItem className="p-0">
                <Link
                  href={`/${login}`}
                  className="flex items-center gap-x-2 rounded-lg p-2 font-medium hover:bg-slate-100"
                  passHref
                >
                  <IconUser className="h-4 w-4 fill-text1" />
                  <span> {t("login_signup")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2 font-medium hover:bg-slate-100"
                  passHref
                >
                  <IconBookBookmark className="h-4 w-4 fill-text1" />
                  <span> {t("my_booking")}</span>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
            </>
          )}
          {session && (
            <>
              <DropdownMenuItem className="p-0">
                <Link
                  href={`/account/bookings`}
                  className="flex items-center gap-x-2 rounded-lg p-2 font-medium hover:bg-slate-100"
                  passHref
                >
                  <IconBookBookmark className="h-4 w-4 fill-text1" />
                  <span>{t("my_bookings")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link
                  href={`/account/profile`}
                  className="flex items-center gap-x-2 rounded-lg p-2 font-medium hover:bg-slate-100"
                  passHref
                >
                  <IconUser className="h-4 w-4 fill-text1" />
                  <span> {t("profile")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex cursor-pointer items-center gap-x-2 rounded-lg p-2 hover:bg-slate-100">
                <IconArrowRightFromBracket className="h-4 w-4 fill-text1" />
                <span onClick={() => signOut()} className="ml-1 font-medium">
                  {t("logout")}
                </span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
