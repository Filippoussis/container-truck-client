import { z } from 'zod';
import { jwtDecode } from 'jwt-decode';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zodEmail, zodPassword } from '@/shared/validations/auth';
// import { DevTool } from '@hookform/devtools';

const formSchema = z.object({
  email: zodEmail,
  password: zodPassword,
});

export const RegistrationCompleteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { activateToken } = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  React.useEffect(() => {
    try {
      const { email } = jwtDecode<{ email: string }>(activateToken || '');
      form.setValue('email', email);
    } catch (e) {
      console.info(e);
    }
  }, [activateToken, form]);

  return (
    <FormProvider {...form}>
      {children}
      {/* <DevTool control={form.control} /> */}
    </FormProvider>
  );
};
