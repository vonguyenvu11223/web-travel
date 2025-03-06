"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const ClientLoginWrapper = ({
  method,
}: {
  method: "google" | "facebook" | "close";
}) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!(status === "loading") && !session) void signIn(method);
    if (status === "authenticated" || method === "close") {
      if (
        window &&
        window.opener &&
        (window.opener.opener === null || window.opener.opener === window)
      ) {
        window.close();
      } else {
        redirect(`/login`);
      }
    }
  }, [session, status]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: 10000,
        left: 0,
        top: 0,
        background: "white",
      }}
    ></div>
  );
};

export default ClientLoginWrapper;
