import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

export const NameOfCargo = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="nameOfCargo"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} label="Наименование" error={!!error} />
      )}
    />
  );
};
