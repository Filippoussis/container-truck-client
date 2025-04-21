import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  OutlinedInput,
} from '@mui/material';

type Props = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
};

export const RHFEmail = ({ label, placeholder, disabled }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      render={({ field: { value, ...rest }, fieldState: { error } }) => (
        <FormControl {...rest} error={!!error}>
          <FormLabel>{label}</FormLabel>
          <OutlinedInput
            placeholder={placeholder}
            value={value}
            disabled={disabled}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
