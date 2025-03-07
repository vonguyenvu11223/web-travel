"use client";

import { IconSearch } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import * as React from "react";

export interface IClearFilterProps {
  keyword: string | undefined;
}

export default function SearchPost({ keyword }: IClearFilterProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const t = useTranslations("blog");
  const handleSearchPost = React.useCallback(() => {
    const searchTerm = ref.current?.value || "";
    if (typeof window !== "undefined") {
      let queryParams = new URLSearchParams(window.location.search);
      queryParams.set("keyword", searchTerm);
      const path =
        window?.location?.pathname +
        "?" +
        queryParams.toString().toLocaleLowerCase();
      router.push(`/${path.substring(1)}`, { scroll: false });
    }
  }, [router]);

  return (
    <>
      <Input
        className="pr-12 text-base font-normal"
        placeholder={t("search_keyword")}
        defaultValue={keyword}
        ref={ref}
      />
      <Button
        type="submit"
        className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 bg-transparent px-0 py-0 font-semibold text-white"
        onClick={handleSearchPost}
      >
        <IconSearch className="h-4 w-4 fill-primary font-semibold" />
      </Button>
    </>
  );
}
