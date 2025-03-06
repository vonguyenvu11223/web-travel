"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import LoadingSpinner from "../loading/loadingSpiner";
import { useTranslations } from "next-intl";
import { InputPassWord } from "../Form/input-password";

export interface ILoginWithEmailProps {
  callback?: string | null;
}

export default function LoginWithEmail({ callback }: ILoginWithEmailProps) {
  const session = useSession();
  const [loginError, setLoginError] = React.useState<string | null>(null); 


  const t = useTranslations("account");

  const formSchema = z.object({
    email: z.string().email({ message: t("email_valid") }),
    password: z
      .string()
      .nonempty(t("password_required"))
      .refine((value) => value.length >= 3, { message: t("password_rule") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
  };
  return (
    <>
      {/* {JSON.stringify(session)}1 */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("enter_email")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <InputPassWord
                      placeholder={t("enter_password")}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full text-base font-bold text-white"
          >
            {form.formState.isSubmitting ? (
              <>
                <LoadingSpinner />
              </>
            ) : (
              t("login")
            )}
          </Button>
          {loginError && (
            <p className="font-medium text-red-500">{loginError}</p>
          )}{" "}
          {/* Hiển thị thông báo lỗi */}
        </form>
      </Form>
    </>
  );
}
