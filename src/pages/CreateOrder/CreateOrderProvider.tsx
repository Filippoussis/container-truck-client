import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';
import { schema, Schema, defaultValues } from './types/schema';

export const CreateOrderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const form = useForm<Schema>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <FormProvider {...form}>
      {children}
      <DevTool control={form.control} />
    </FormProvider>
  );
};
