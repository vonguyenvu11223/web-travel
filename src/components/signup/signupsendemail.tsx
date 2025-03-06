'use client';
import * as React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import LoadingSpinner from '../loading/loadingSpiner';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import appConfig from '@/config';
import SignupWithEmail from './signupwithemail';
import { useTranslations } from 'next-intl';

export interface ISignUpSendEmailProps {
  callback?: string | null;
}

interface IStep {
  registration_email: string;
  send_email: string;
  verify_email: string;
  sign_up: string;
}
const steps: IStep = {
  registration_email: '1',
  send_email: '2',
  verify_email: '3',
  sign_up: '4',
};

export default function SignUpSendEmail({ callback }: ISignUpSendEmailProps) {
  const t = useTranslations('account');
  const formSchema = z.object({
    email: z.string().email({ message: t('email_valid') }),
  });
  const formSchemaCode = z.object({
    code: z.string().nonempty({ message: t('code_required') }),
  });
  const [activeKey, setActiveKey] = React.useState<string>(
    steps.registration_email
  );
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
    
  };
  return (
    <>
      {activeKey === steps.registration_email && (
        <>
          <div className="mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              {t('signup_email')}
            </h2>
            <p className="text-center">{t('signup_email_sub')}</p>
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
      {/* {activeKey === steps.send_email && (
        <>
          <div className="mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-start">
              Welcome back
            </h2>
            {form.getValues('email')}
            <p className="mb-5 text-left">
              We’ll email you a link for a one-tap sign up.
            </p>
            <Button
              type="submit"
              variant="outline"
              className="w-full text-base font-bold text-primary hover:text-primary"
              onClick={handleSendemail}>
              {loading ? (
                <>
                  <LoadingSpinner />
                </>
              ) : (
                'Email me'
              )}
            </Button>
          </div>
        </>
      )} */}
      {activeKey === steps.verify_email && (
        <>
          <div className="mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-start">
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
                            <FormLabel> {t('code')}</FormLabel>
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
          <div className="px-5 mb-5">
            <h2 className="mb-3 flex items-center text-xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              {t('signup_email')}
            </h2>
            <p className="text-center">{t('signup_email_sub')}</p>
          </div>
          <SignupWithEmail
            data={{ email: form.getValues('email') }}
            callback={callback}
          />
        </>
      )}
      {Error && <p className="font-medium text-red-500">{Error}</p>}{' '}
    </>
  );
}
