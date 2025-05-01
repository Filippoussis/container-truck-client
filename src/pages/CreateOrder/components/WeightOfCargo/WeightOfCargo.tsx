import { Controller, useFormContext } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { TextField, InputAdornment } from '@mui/material';

export const WeightOfCargo = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="weightOfCargo"
      control={control}
      render={({ field: { ref, ...otherField }, fieldState: { error } }) => (
        <NumericFormat
          {...otherField}
          allowNegative={false}
          allowLeadingZeros={false}
          label="Масса"
          customInput={TextField}
          inputRef={ref}
          error={!!error}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">кг</InputAdornment>,
            },
          }}
        />
      )}
    />
  );
};
