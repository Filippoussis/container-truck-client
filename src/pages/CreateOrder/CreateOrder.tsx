import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useCreateOrder } from '@/api/orders/mutations';
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
import { CreateOrderProvider } from './CreateOrderProvider';
import { Schema, defaultValues } from './types/schema';

const CreateOrderConsumer = () => {
  const { mutate, isPending } = useCreateOrder();
  const { reset, handleSubmit } = useFormContext<Schema>();

  const handleReset = () => {
    reset(defaultValues);
  };

  const onSubmit: SubmitHandler<Schema> = (data) => {
    const {
      dateOfTransportation,
      warehouseAddress,
      containerDeliveryAddress,
      containerReceivingAddress,
      ...restData
    } = data;
    mutate({
      dateOfTransportation: dateOfTransportation.toISOString(),
      warehouseAddress: warehouseAddress.value,
      warehouseCity: warehouseAddress.data.city || '',
      containerReceivingAddress: containerReceivingAddress.value,
      containerReceivingCity: containerReceivingAddress.data.city || '',
      containerDeliveryAddress: containerDeliveryAddress.value,
      containerDeliveryCity: containerDeliveryAddress.data.city || '',
      ...restData,
    });
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
        <Button variant="contained" type="submit" loading={isPending}>
          Отправить
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Очистить
        </Button>
      </Stack>
    </Box>
  );
};

export const CreateOrder = () => {
  return (
    <CreateOrderProvider>
      <CreateOrderConsumer />
    </CreateOrderProvider>
  );
};
