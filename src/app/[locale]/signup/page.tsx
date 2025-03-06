import SignUpSendEmail from "@/components/signup/signupsendemail";
import { authOptions } from "@/util/authOptions";
import { getServerSession } from "next-auth";
import { Link } from "@/navigation";
import { redirect } from "next/navigation";
import * as React from "react";
import { getTranslations } from "next-intl/server";
import NextIntlProvider from "@/components/providers/NextIntlProvider";
import ButtonLogins from "@/components/login/buttonLogin";

export interface ILoginProps { }

export default async function Signup({
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <NextIntlProvider>
          <SignUpSendEmail callback={callback} />
        </NextIntlProvider>

        <ButtonLogins />
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <div>
            {t("already_account")}{" "}
            {callback ? (
              <Link
                href={`/login?callback=${callback}`}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("login")}
              </Link>
            ) : (
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("login")}
              </Link>
            )}
          </div>

          
          <div className="mt-4">
            {t("agree_account")}{" "}
            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              {t("terms_and_conditions")}
            </Link>
            ,{" "}
            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              {t("privacy_policy")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
