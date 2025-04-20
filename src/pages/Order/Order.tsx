import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  DateOfTransportation,
  TypeOfOperation,
  TypeOfContainer,
  HeightOfContainer,
  NameOfCargo,
  WeightOfCargo,
  SignOfCargoDanger,
  WarehouseAddress,
  ContainerDeliveryAddress,
  ContainerReceivingAddress,
} from './components';
import { OrderProvider } from './OrderProvider';
import { Schema, defaultValues } from './types/schema';

const OrderConsumer = () => {
  const { reset, handleSubmit } = useFormContext<Schema>();

  const handleReset = () => {
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log('data', data);
    console.log('toUTCString', data.dateOfTransportation.toUTCString());
    console.log('toISOString', data.dateOfTransportation.toISOString());
    console.log('toDateFromISO', new Date('2025-04-20'));
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" mb={3}>
        Заявка
      </Typography>
      <Stack spacing={2}>
        <DateOfTransportation />
        <TypeOfOperation />
        <Typography variant="h6">Контейнер</Typography>
        <TypeOfContainer />
        <HeightOfContainer />
        <Typography variant="h6">Груз</Typography>
        <NameOfCargo />
        <WeightOfCargo />
        <SignOfCargoDanger />
        <Typography variant="h6">Адреса</Typography>
        <ContainerReceivingAddress />
        <WarehouseAddress />
        <ContainerDeliveryAddress />
        <Button variant="contained" type="submit">
          Отправить
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Очистить
        </Button>
      </Stack>
    </Box>
  );
};

export const Order = () => {
  return (
    <OrderProvider>
      <OrderConsumer />
    </OrderProvider>
  );
};
