import { z } from 'zod';
import * as React from 'react';
import { jwtDecode } from 'jwt-decode';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zodEmail, zodPassword } from '@/shared/validations/auth';
// import { DevTool } from '@hookform/devtools';

const formSchema = z.object({
  email: zodEmail,
  password: zodPassword,
});

export const ResetPasswordConfirmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { resetToken } = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  React.useEffect(() => {
    try {
      const { email } = jwtDecode<{ email: string }>(resetToken || '');
      form.setValue('email', email);
    } catch (e) {
      console.info(e);
    }
  }, [resetToken, form]);

  return (
    <FormProvider {...form}>
      {children}
      {/* <DevTool control={form.control} /> */}
    </FormProvider>
  );
};
