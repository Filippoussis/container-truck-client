import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';

type Order = {
  id: string;
  dateOfTransportation: string;
  typeOfOperation: 'load' | 'unload';
  typeOfContainer: string;
  heightOfContainer: 'standart' | 'high';
  nameOfCargo: string;
  weightOfCargo: string;
  signOfCargoDanger: 'dangerous' | 'notDangerous';
  warehouseAddress: string;
  warehouseCity: string;
  containerReceivingAddress: string;
  containerReceivingCity: string;
  containerDeliveryAddress: string;
  containerDeliveryCity: string;
  user: {
    email: string;
  };
};

export function useQueryOrders() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      axiosInstance.get<Order[]>('/api/orders/getAll').then((res) => res.data),
  });
}
