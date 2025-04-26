import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';
import { router } from '@/router';
import { useAuthAPI } from '@/services/AuthProvider';

export function useLoginUser() {
  const { onAuthenticate } = useAuthAPI();
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await axiosInstance.post('/api/users/login', data);
    },

    onSuccess: () => {
      onAuthenticate(true);
      router.navigate('/');
    },
  });
}
