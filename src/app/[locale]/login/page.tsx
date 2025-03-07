import LoginWithEmail from "@/components/login/loginwithemail";
import { getServerSession } from "next-auth";
import { Link } from "@/navigation";
import * as React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/util/authOptions";
import { getTranslations } from "next-intl/server";
import NextIntlProvider from "@/components/providers/NextIntlProvider";
import ButtonLogins from "@/components/login/buttonLogin";
import { NextAuthProvider } from "@/components/providers";

export interface ILoginProps {}

export default async function Login({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  const t = await getTranslations("account");
  const session = await getServerSession(authOptions);
  const callback = searchParams?.callback || null;

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t("login_get_exploring")}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            {t("login_get_exploring_text")}
          </p>
        </div>
        <NextIntlProvider>
          <NextAuthProvider session={session}>
            <LoginWithEmail callback={callback} />
          </NextAuthProvider>
        </NextIntlProvider>
        <div className="my-6 flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-4 text-gray-500 dark:text-gray-400">
            or continue with
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <ButtonLogins />
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <div>
            <Link
              href={callback ? "#" : "/forgot-password"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t("forgot_password")}
            </Link>
          </div>
          <div className="mt-2">
            {t("already_not_account")}{" "}
            <Link
              href={callback ? `/signup?callback=${callback}` : "/signup"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t("signup")}
            </Link>
          </div>
          <div className="mt-4">
            {t("agree_account")}{" "}
            <Link
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t("terms_and_conditions")}
            </Link>
            ,{" "}
            <Link
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t("privacy_policy")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
