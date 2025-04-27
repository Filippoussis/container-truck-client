import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';
import { router } from '@/router';
import { useAuthAPI } from '@/services/AuthProvider';

export function useLogin() {
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

export function useRegisterInit() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      await axiosInstance.post('/api/users/register', data);
    },
  });
}

export function useRegisterComplete() {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await axiosInstance.patch('/api/users/register', data);
    },
  });
}

export function useResetPasswordInit() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      await axiosInstance.post('/api/users/reset-password', data);
    },
  });
}

export function useResetPasswordComplete() {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await axiosInstance.patch('/api/users/reset-password', data);
    },
  });
}
