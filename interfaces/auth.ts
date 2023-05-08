import { z } from "zod";

export const IRegisterUser = z.object({
  fullname: z.string(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string().optional(),
});

export const ILoginUser = z.object({
  emailOrUsername: z.string().email(),
  password: z.string(),
});
