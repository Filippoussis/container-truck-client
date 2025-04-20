import { RHFAutocomplete } from '@/components';
import { Schema } from '../../types/schema';

export const ContainerDeliveryAddress = () => (
  <RHFAutocomplete<Schema>
    name="containerDeliveryAddress"
    label="Сдача контейнера"
  />
);
