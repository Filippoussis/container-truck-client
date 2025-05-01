import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const TypeOfOperation = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="typeOfOperation"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>Тип операции</FormLabel>
          <ToggleButtonGroup {...field} exclusive>
            <ToggleButton fullWidth value="load">
              Погрузка
            </ToggleButton>
            <ToggleButton fullWidth value="unload">
              Выгрузка
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
      )}
    />
  );
};
