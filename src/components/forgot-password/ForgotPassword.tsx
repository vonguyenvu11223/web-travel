"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { InputPassWord } from "../Form/input-password";

export interface IForgotPasswordProps {
  email: string;
  callback?: string | null;
}

export default function ForgotPassword({
  email,
  callback,
}: IForgotPasswordProps) {
  const t = useTranslations("account");
  const formSchema: any = z
    .object({
      new_password: z
        .string()
        .nonempty(t("password_required"))
        .refine((value) => value.length >= 3, { message: t("password_rule") }),
      confirm_new_password: z.string(),
    })
    .refine(
      (values) => {
        return values.new_password === values.confirm_new_password;
      },
      {
        message: t("confirm_password_match"),
        path: ["confirm_new_password"],
      },
    );
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_password: "",
      confirm_new_password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>{t("new_password")}</FormLabel>
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
          <FormField
            control={form.control}
            name="confirm_new_password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>{t("confirm_password")}</FormLabel>
                  <FormControl>
                    <InputPassWord
                      placeholder={t("new_password")}
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
            loading={form.formState.isSubmitting}
            className="w-full text-base font-bold text-white"
          >
            {t("save")}
          </Button>
          {error && <p className="font-medium text-red-500">{error}</p>}{" "}
          {success && <p className="font-medium text-green-500">{success}</p>}{" "}
        </form>
      </Form>
    </div>
  );
}
