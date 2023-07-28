'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { cn } from '#/lib/utils';
import { userRegSchema } from '#/lib/validation/auth';

import { Icons } from './icons';
import { buttonVariants } from './ui/button';
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
    <div className="h-full bg-item_pink">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading }
              {...register('email')}
            />
            {errors?.email && (
              <p className="text-red-600 px-1 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="firstName">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="John Doe"
              type="text"
              autoCapitalize="words"
              autoComplete="firstName"
              autoCorrect="off"
              disabled={isLoading}
              {...register('firstName')}
            />
            {errors?.firstName && (
              <p className="text-red-600 px-1 text-xs">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="firstName">
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
              {...register('firstName')}
            />
            {errors?.firstName && (
              <p className="text-red-60git 0 px-1 text-xs">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegForm;
