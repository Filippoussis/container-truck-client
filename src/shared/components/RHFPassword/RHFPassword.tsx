import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from '@mui/material';

import { Eye, EyeOff } from 'lucide-react';

type Props = {
  label: string;
  placeholder: string;
  autoFocus?: boolean;
};

export const RHFPassword = ({ label, placeholder, autoFocus }: Props) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>{label}</FormLabel>
          <OutlinedInput
            autoFocus={autoFocus}
            placeholder={placeholder}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
