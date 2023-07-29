'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import type * as z from 'zod';

import { userRegSchema } from '#/lib/validation/auth';

import { Icons } from './icons';
import { Input } from './ui/input';

interface UserRegFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userRegSchema>;

const UserRegForm = ({ ...props }: UserRegFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userRegSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  async function onSubmit(data: FormData) {
    setIsLoading(false);
    return console.log(data);
  }

  return (
    <div className="flex min-h-[80vh] flex-row-reverse justify-between ">
      <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-12 lg:px-8">
        <div className="mb-4 space-y-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <Icons.logo className="mx-auto h-10 w-auto rounded-full" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="gap-4 space-y-6 md:flex md:space-y-0">
              <div className="">
                <Label
                  className="block text-sm font-medium leading-6 "
                  htmlFor="firstName"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  type="text"
                  autoCapitalize="words"
                  autoComplete="firstName"
                  autoCorrect="off"
                  disabled={isLoading}
                  className={`mt-2 border ${
                    errors.firstName && 'border-red-500'
                  } `}
                  {...register('firstName')}
                />
                {errors?.firstName && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="">
                <Label
                  className="block text-sm font-medium leading-6 "
                  htmlFor="lastName"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  type="text"
                  autoCapitalize="words"
                  autoComplete="lastName"
                  autoCorrect="off"
                  disabled={isLoading}
                  className={`mt-2 border ${
                    errors.lastName && 'border-red-500'
                  } `}
                  {...register('lastName')}
                />
                {errors?.lastName && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>{' '}
            </div>

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
              {errors?.password && (
                <p className="0 px-1 text-xs text-red-600">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div className="">
              <Label
                className="block text-sm font-medium leading-6 "
                htmlFor="confirmPassword"
              >
                Confirm Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  disabled={isLoading}
                  className="mt-2"
                  {...register('confirmPassword')}
                />
                <div
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                  onClick={() => setConfirmPasswordVisible((prev) => !prev)}
                >
                  {confirmPasswordVisible ? (
                    <BsEyeSlash className="h-5 w-5 text-gray-400 " />
                  ) : (
                    <BsEye className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {errors?.confirmPassword && (
                <p className="px-1  text-xs text-red-600">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <input type="checkbox" id="terms" {...register('terms')} />
              <label
                htmlFor="terms"
                className={`mb-2 ml-2 text-sm font-bold ${
                  errors.terms ? 'text-red-500' : ''
                }`}
              >
                Accept Terms & Conditions
              </label>
              {errors.terms && (
                <p className="mt-2 text-xs italic text-red-500">
                  {errors.terms?.message}
                </p>
              )}
            </div>
            <button
              className="flex w-full justify-center rounded-md bg-colours-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Register Account
            </button>
          </form>
        </div>
      </div>
      <div className="bg-red hidden w-full flex-1 md:flex"></div>
    </div>
  );
};

export default UserRegForm;
