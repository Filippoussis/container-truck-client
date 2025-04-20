import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const SignOfCargoDanger = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="signOfCargoDanger"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>Признак опасности</FormLabel>
          <ToggleButtonGroup {...field} exclusive>
            <ToggleButton fullWidth value="notDangerous">
              Неопасный
            </ToggleButton>
            <ToggleButton fullWidth value="dangerous">
              Опасный
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
      )}
    />
  );
};
