import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ru } from 'date-fns/locale';

export const DateOfTransportation = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="dateOfTransportation"
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <DatePicker
            {...field}
            label="Дата перевозки"
            format="dd-MM-yyyy"
            minDate={new Date()}
            views={['day']}
          />
        </LocalizationProvider>
      )}
    />
  );
};
