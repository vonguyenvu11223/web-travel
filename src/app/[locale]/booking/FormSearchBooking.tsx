"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface IFormSearchBookingProps {}

const formSchema: any = z.object({
  order_no: z.string().nonempty("This value is required.").min(6),
});
export default function FormSearchBooking(props: IFormSearchBookingProps) {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      order_no: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res =undefined;
    if (!res) return setError("Find booking failed, please try again later.");
    
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="order_no"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Booking Reference</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your booking reference"
                      type="text"
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
            Find my booking
          </Button>
          {error && <p className="font-medium text-red-500">{error}</p>}{" "}
          {success && <p className="font-medium text-green-500">{success}</p>}{" "}
          {/* Hiển thị thông báo lỗi */}
        </form>
      </Form>
    </div>
  );
}
