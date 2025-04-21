import { z } from 'zod';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zodEmail } from '@/shared/validations/auth';
// import { DevTool } from '@hookform/devtools';

const formSchema = z.object({
  email: zodEmail,
});

export const RequestPasswordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });
  return (
    <FormProvider {...form}>
      {children}
      {/* <DevTool control={form.control} /> */}
    </FormProvider>
  );
};
