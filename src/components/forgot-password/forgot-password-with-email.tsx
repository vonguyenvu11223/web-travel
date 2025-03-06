'use client';

import LoadingSpinner from '@/components/loading/loadingSpiner';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import appConfig from '@/config';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import ForgotPassword from './ForgotPassword';
import api from '@/util/api';
import { useTranslations } from 'next-intl';

export interface IForgotPasswordProps {
  callback?: string | null;
}
interface IStep {
  send_email: string;
  verify_email: string;
  sign_up: string;
}
const steps: IStep = {
  send_email: '2',
  verify_email: '3',
  sign_up: '4',
};

export default function ForgotPasswordSteps({
  callback,
}: IForgotPasswordProps) {
  const t = useTranslations('account');
  const formSchema = z.object({
    email: z.string().email({ message: t('email_valid') }),
  });
  const formSchemaCode = z.object({
    code: z.string().nonempty({ message: t('code_required') }),
  });
  const [activeKey, setActiveKey] = React.useState<string>(steps.send_email);
  const [Error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const formCode = useForm<z.infer<typeof formSchemaCode>>({
    resolver: zodResolver(formSchemaCode),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
  };
  const handleSendemail = async () => {
    
  };

  const onSubmitFormCode = async (values: z.infer<typeof formSchemaCode>) => {
    // console.log('code', values);
    const res = await fetch(
      `${appConfig.API_URL}/v1/verify-email/code/${values.code}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status === 422 || res.ok === false)
      return setError(t('verify_code_fail'));
    const check = await res.json();
    if (check.OK === false) {
      return setError(t('verify_code_fail'));
    }
    if (check) {
      setError(null);
      setActiveKey(steps.sign_up);
    } else {
      return setError(t('verify_code_fail'));
    }
  };
  return (
    <>
      {activeKey === steps.send_email && (
        <>
          <div className="mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              {t('forgot_password')}
            </h2>
            <p className="mb-5 text-center">{t('check_forgot_password_sub')}</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel> {t('email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('enter_email')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full text-base font-bold text-white">
                  {form.formState.isSubmitting ? (
                    <>
                      <LoadingSpinner />
                    </>
                  ) : (
                    t('continue')
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </>
      )}
      {activeKey === steps.verify_email && (
        <>
          <div className="mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              {t('check_inbox')}
            </h2>
            {form.getValues('email')}
            <p className="mb-5 text-left">{t('check_inbox_sub')}</p>

            <Form {...formCode}>
              <form
                onSubmit={formCode.handleSubmit(onSubmitFormCode)}
                className="space-y-4">
                <div className="flex items-end w-full gap-3">
                  <div className="flex-1">
                    <FormField
                      control={formCode.control}
                      name="code"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>{t('code')}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-auto py-5 text-base font-bold text-primary hover:text-primary"
                    onClick={handleSendemail}>
                    {loading ? (
                      <>
                        <LoadingSpinner />
                      </>
                    ) : (
                      t('resend_email')
                    )}
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="w-full text-base font-bold text-white">
                  {formCode.formState.isSubmitting ? (
                    <>
                      <LoadingSpinner />
                    </>
                  ) : (
                    t('continue')
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </>
      )}
      {activeKey === steps.sign_up && (
        <>
          <div className="mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              {t('create_password')}
            </h2>
            {form.getValues('email')}
            <p>{t('create_password_sub')}</p>
          </div>
          <ForgotPassword email={form.getValues('email')} callback={callback} />
        </>
      )}
      {Error && <p className="font-medium text-red-500">{Error}</p>}{' '}
    </>
  );
}
