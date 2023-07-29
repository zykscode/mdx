'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import type * as z from 'zod';

import { cn } from '#/lib/utils';
import { userAuthSchema } from '#/lib/validation/auth';

import { Icons } from './icons';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from './ui/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({  ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const [passwordVisible, setPasswordVisible] = useState(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      });
    }

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    });
  }

  return (
    <div className="flex min-h-[80vh] w-full flex-row-reverse justify-between">
      <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-12 lg:px-8">
        <div className="mb-4 space-y-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <Icons.logo className="mx-auto h-10 w-auto rounded-full" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Login into your account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <Label
              className="block text-sm font-medium leading-6 "
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
              className={`border-3 mt-2 focus:border-2 ${
                errors?.email
                  ? 'border-red-500 focus:border-red-500   '
                  : 'border-item_blue focus:border-item_blue   '
              } `}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="">
            <Label
              className="block text-sm font-medium leading-6 "
              htmlFor="password"
            >
              Password
            </Label>
            <div className="relative mt-2">
              <Input
                id="password"
                placeholder="Enter Password"
                type={passwordVisible ? 'text' : 'password'}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading}
                className="mt-2"
                {...register('password')}
              />
              <div
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? (
                  <BsEyeSlash className="h-5 w-5 text-gray-400 " />
                ) : (
                  <BsEye className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>

          <button
            className="flex w-full justify-center rounded-md bg-colours-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <button
          type="button"
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn('google');
          }}
          disabled={isLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FcGoogle className="mr-2 h-4 w-4" />
          )}{' '}
          Github
        </button>
      </div>
      <div className="flex-1 bg-colours-red  hidden w-full md:flex"></div>
    </div>
  );
}
