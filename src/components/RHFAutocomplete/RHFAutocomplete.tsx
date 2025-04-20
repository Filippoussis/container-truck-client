import React, { useEffect, useState } from 'react';
import { Controller, useFormContext, FieldValues, Path } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useDadata } from '@/api/dadata/queries';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export const RHFAutocomplete = <T extends FieldValues>({
  name,
  label,
}: Props<T>) => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Array<{ value: string }>>([]);
  const { isLoading, data = [] } = useDadata(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (data?.suggestions) {
      setOptions(data.suggestions);
    }
  }, [data]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
        return (
          <Autocomplete
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            options={options}
            getOptionLabel={(option) => option && option?.value}
            renderInput={(params) => (
              <TextField
                {...params}
                multiline
                label={label}
                value={inputValue}
                onChange={handleInputChange}
                error={!!error}
                inputRef={ref}
                slotProps={{
                  input: {
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {isLoading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  },
                }}
              />
            )}
            loading={isLoading}
            filterOptions={(x) => x}
            noOptionsText={
              inputValue ? 'No results found.' : 'Start typing to search...'
            }
            value={
              options.find((option) => option.value === value.value) || null
            }
            onChange={(_, newValue) => {
              if (newValue) {
                onChange(newValue);
                setInputValue(newValue.value);
              }
            }}
            popupIcon={<></>}
          />
        );
      }}
    />
  );
};
