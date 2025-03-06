"use client";

import * as React from "react";
import {
  IconArrowUpFrom,
  IconChevronDown,
  IconLink,
} from "../../../../components/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { useTranslations } from "next-intl";

export interface ITourShareProps {}

export default function TourShare(props: ITourShareProps) {
  const t = useTranslations("tour");
  const [copied, setCopied] = React.useState(false);
  const handleCopyClickMobile = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Title of the shared content",
          text: "Description of the shared content",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    }
    setCopied(true);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(window.location.toString());
    setCopied(true);
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div className="flex cursor-pointer items-center gap-1 pr-5">
            <IconArrowUpFrom className="h-4 w-4 fill-text1"></IconArrowUpFrom>
            <span>{t("share")}</span>
            <IconChevronDown className="h-2 w-2 fill-text1"></IconChevronDown>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px]">
          <div
            className="hidden cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-slate-200 md:text-sm lg:flex"
            onClick={handleCopyClick}
          >
            <IconLink className="h-4 w-4 fill-text1"></IconLink>
            {copied ? (
              <span>{t("copied_link")}</span>
            ) : (
              <span>{t("copy_link")}</span>
            )}
          </div>
          <div
            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-slate-200 md:text-sm lg:hidden"
            onClick={handleCopyClickMobile}
          >
            <IconLink className="h-4 w-4 fill-text1"></IconLink>
            {copied ? (
              <span>{t("copied_link")}</span>
            ) : (
              <span>{t("copy_link")}</span>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
