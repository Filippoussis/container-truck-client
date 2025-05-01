import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';
import { useSnackAPI } from '@/services/SnackProvider';
import { router } from '@/router';

export function useCreateOrder() {
  const { showSnack } = useSnackAPI();
  return useMutation({
    mutationFn: async (data: {
      dateOfTransportation: string;
      typeOfOperation: string;
      typeOfContainer: string;
      heightOfContainer: string;
      nameOfCargo: string;
      weightOfCargo: string;
      signOfCargoDanger: string;
      warehouseAddress: string;
      warehouseCity: string;
      containerReceivingAddress: string;
      containerReceivingCity: string;
      containerDeliveryAddress: string;
      containerDeliveryCity: string;
    }) => {
      await axiosInstance.post('/api/orders/create', data);
    },
    onSuccess: () => {
      showSnack({
        open: true,
        message: 'Заявка успешно создана',
        severity: 'success',
      });
      router.navigate('/');
    },
    onError: () => {
      showSnack({
        open: true,
        message: 'Что-то пошло не так...',
        severity: 'error',
      });
    },
  });
}
