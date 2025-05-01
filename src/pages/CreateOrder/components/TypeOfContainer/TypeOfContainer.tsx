import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const TypeOfContainer = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="typeOfContainer"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>Тип</FormLabel>
          <ToggleButtonGroup {...field} exclusive>
            <ToggleButton fullWidth value="20">
              20
            </ToggleButton>
            <ToggleButton fullWidth value="40">
              40
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
      )}
    />
  );
};
