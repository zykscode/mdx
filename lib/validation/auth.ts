import * as z from 'zod';

export const userAuthSchema = z.object({
  email: z.string().email(),
});

export const userRegSchema = z
  .object({
    firstName: z.string().min(1, { message: 'Firstname is required' }),
    lastName: z.string().min(1, { message: 'Lastname is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
        {
          message:
            'Password must contain at least 1 capital letter, 1 digit, and 1 special character',
        }
      ),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  });
