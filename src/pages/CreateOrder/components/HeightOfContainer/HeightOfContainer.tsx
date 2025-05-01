import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const HeightOfContainer = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="heightOfContainer"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>Высота</FormLabel>
          <ToggleButtonGroup {...field} exclusive>
            <ToggleButton fullWidth value="standart">
              Стандарт
            </ToggleButton>
            <ToggleButton fullWidth value="high">
              Высокий
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
      )}
    />
  );
};
