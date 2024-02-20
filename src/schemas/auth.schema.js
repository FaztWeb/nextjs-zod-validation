import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string({
        required_error: "First name is required",
      })
      .min(2, {
        message: "First name must be at least 2 characters long",
      })
      .max(50),
    lastName: z
      .string({
        required_error: "Last name is required",
      })
      .min(2)
      .max(50),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6)
      .max(50),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(6)
      .max(50),
    age: z.number().int().positive().min(18).max(100).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

