import { z } from 'zod';

export const schema = z.object({
  dateOfTransportation: z.date(),
  typeOfOperation: z.string().min(1),
  typeOfContainer: z.string().min(1),
  heightOfContainer: z.string().min(1),
  nameOfCargo: z.string().min(1),
  weightOfCargo: z.string().min(1),
  signOfCargoDanger: z.string().min(1),
  warehouseAddress: z.object({
    data: z.object({}),
    value: z.string().min(1),
    unrestricted_value: z.string(),
  }),
  containerDeliveryAddress: z.object({
    data: z.object({}),
    value: z.string(),
    unrestricted_value: z.string(),
  }),
  containerReceivingAddress: z.object({
    data: z.object({}),
    value: z.string(),
    unrestricted_value: z.string(),
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  dateOfTransportation: new Date(),
  typeOfOperation: '',
  typeOfContainer: '',
  heightOfContainer: '',
  nameOfCargo: '',
  weightOfCargo: '',
  signOfCargoDanger: '',
  warehouseAddress: {
    data: {},
    value: '',
    unrestricted_value: '',
  },
  containerDeliveryAddress: { data: {}, value: '', unrestricted_value: '' },
  containerReceivingAddress: { data: {}, value: '', unrestricted_value: '' },
};
