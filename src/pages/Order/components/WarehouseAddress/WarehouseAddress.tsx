import { RHFAutocomplete } from '@/components';
import { Schema } from '../../types/schema';

export const WarehouseAddress = () => (
  <RHFAutocomplete<Schema>
    name="warehouseAddress"
    label="Склад погрузки/выгрузки "
  />
);
