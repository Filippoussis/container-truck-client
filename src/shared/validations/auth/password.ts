import { z } from 'zod';

export const zodPassword = z
  .string()
  .min(8, {
    message: 'Пароль должен быть не менее 8 знаков',
  })
  .refine((password) => /[A-Z]/.test(password), {
    message: 'Пароль должен содержать заглавные буквы',
  })
  .refine((password) => /[a-z]/.test(password), {
    message: 'Пароль должен содержать строчные буквы',
  })
  .refine((password) => /[0-9]/.test(password), {
    message: 'Пароль должен содержать цифры',
  });
