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
import { useRouter } from "next/navigation";
import LoadingSpinner from "../loading/loadingSpiner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useTranslations } from "next-intl";
import { Route } from "next";
import { InputPassWord } from "../Form/input-password";

export interface ISignupWithEmailProps {
  data?: any;
  callback?: string | null;
}

export default function SignupWithEmail({
  data,
  callback,
}: ISignupWithEmailProps) {
  const t = useTranslations("account");
  const formSchema = z.object({
    email: z.string().email({ message: t("email_valid") }),
    password: z
      .string()
      .nonempty(t("password_required"))
      .refine((value) => value.length >= 3, { message: t("password_rule") }),
    firstname: z.string().nonempty(t("firstname_required")),
    lastname: z.string().nonempty(t("lastname_required")),
  });
  const router = useRouter();
  const [Error, setError] = React.useState<string | null>(null);
  const [openModal, setOpen] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: data.email || "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
  };
  const onOpenChange = (value: boolean) => {
    if (value === false) {
      if (callback) {
        router.replace(`${callback}` as Route, { scroll: false });
        router.refresh();
        form.reset(); // Đặt lại tất cả trường của biểu mẫu
      } else {
        router.replace("/" as Route, { scroll: false });
        router.refresh();
        form.reset(); // Đặt lại tất cả trường của biểu mẫu
      }
    }
    setOpen(value);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-x-5">
            <div>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{t("firstname")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("enter_first_name")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{t("lastname")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("enter_last_name")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>
                    {t("email")}{" "}
                    {data?.email && (
                      <span className="text-lime-600"> ( verified ) </span>
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("enter_email")}
                      readOnly={true}
                      disabled={true}
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
            className="w-full text-base font-bold text-white"
          >
            {form.formState.isSubmitting ? (
              <>
                <LoadingSpinner />
              </>
            ) : (
              t("signup")
            )}
          </Button>
          {Error && <p className="font-medium text-red-500">{Error}</p>}{" "}
        </form>
      </Form>
      <Dialog open={openModal} onOpenChange={onOpenChange}>
        {/* <DialogTrigger>{header}</DialogTrigger> */}
        {/* max-w-full max-h-full inset-0 translate-x-0 translate-y-0 */}
        <DialogContent
          className={`inset-0 sm:max-h-full sm:max-w-[350px] md:h-auto md:w-auto`}
        >
          <DialogHeader>
            <DialogTitle> {t("welcome")}</DialogTitle>
            <div className="pb-10">{t("welcome_text")}</div>
            <Button
              type="submit"
              onClick={() => {
                router.replace("/" as Route, { scroll: false });
                router.refresh();
                form.reset();
              }}
              className="text-base font-bold text-white"
            >
              {t("continue")}
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
