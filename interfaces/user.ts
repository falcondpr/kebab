import { z } from "zod";

export const IUserStorage = z.object({
  id: z.string(),
  iat: z.string(),
  fullname: z.string(),
  exp: z.string(),
  email: z.string(),
});
