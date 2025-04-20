import { RHFAutocomplete } from '@/components';
import { Schema } from '../../types/schema';

export const ContainerReceivingAddress = () => (
  <RHFAutocomplete<Schema>
    name="containerReceivingAddress"
    label="Получение контейнера"
  />
);
