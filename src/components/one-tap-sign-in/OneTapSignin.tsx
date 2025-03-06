"use client";

import useOneTapSignin from "@/hooks/useOneTapSignin";

export const OneTapSignin = ({ session }: { session: any }) => {
  const { isLoading: oneTapIsLoading } = useOneTapSignin(
    {
      redirect: false,
      parentContainerId: "oneTap",
    },
    session,
  );

  return (
    <div
      id="oneTap"
      style={{
        position: "fixed",
        zIndex: 950,
        top: "50px",
        right: "0",
        // width: "300px",
        // height: "300px",
      }}
    />
  );
};
