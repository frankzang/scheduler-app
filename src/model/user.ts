import { z } from 'zod';

export const User = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  cpf: z.string(),
  phone: z.string(),
});

export const UserWithPassword = User.extend({
  password: z.string(),
});

export type TUser = z.infer<typeof User>;

export type TUserWithPassword = z.infer<typeof UserWithPassword>;
