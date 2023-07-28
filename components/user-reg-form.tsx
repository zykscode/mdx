'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

  async function onSubmit(data: FormData) {
    setIsLoading(false);
    return console.log(data);
  }

  return (
    <div className="flex flex-row-reverse justify-between  bg-item_pink">
      <div className="flex  flex-1 flex-col justify-center bg-item_pink px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Icons.logo className="mx-auto h-10 w-auto rounded-full" />
          <h2 className="text-gray-900 mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <Label
                className="text-gray-900 block text-sm font-medium leading-6"
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
                className={`mt-2 border ${errors.email && 'border-red-500'} `}
              />
              {errors?.email && (
                <p className="text-red-600 px-1 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <Label
                className="text-gray-900 block text-sm font-medium leading-6"
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
                <p className="text-red-600 px-1 text-xs">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <Label
                className="text-gray-900 block text-sm font-medium leading-6"
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
                <p className="text-red-600 px-1 text-xs">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
            <div className="mt-">
              <Label
                className="text-gray-900 block text-sm font-medium leading-6"
                htmlFor="password"
              >
                Password
              </Label>
              <Input
                id="password"
                placeholder="Enter Password"
                type="password"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading}
                {...register('password')}
              />
              {errors?.password && (
                <p className="text-red-600 0 px-1 text-xs">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <input type="checkbox" id="terms" {...register('terms')} />
              <label
                htmlFor="terms"
                className={`mb-2 ml-2 text-sm font-bold ${
                  errors.terms ? 'text-red-500' : 'text-gray-700'
                }`}
              >
                Accept Terms & Conditions
              </label>
              {errors.terms && (
                <p className="text-red-500 mt-2 text-xs italic">
                  {errors.terms?.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <Label
                className="text-gray-900 block text-sm font-medium leading-6"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading}
                {...register('confirmPassword')}
              />

              {errors?.confirmPassword && (
                <p className="text-red-600  px-1 text-xs">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      <div className="hidden w-full flex-1 bg-red md:flex"></div>
    </div>
  );
};

export default UserRegForm;
