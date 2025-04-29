import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';
import { router } from '@/router';
import { useAuthAPI } from '@/services/AuthProvider';
import { useSnackAPI } from '@/services/SnackProvider';

export function useLogin() {
  const { onAuthenticate } = useAuthAPI();
  const { showSnack } = useSnackAPI();
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await axiosInstance.post('/api/users/login', data);
    },

    onSuccess: () => {
      onAuthenticate(true);
      router.navigate('/');
    },

    onError: () => {
      showSnack({
        open: true,
        message: 'Неверный логин или пароль',
        severity: 'error',
      });
    },
  });
}

export function useLogout() {
  const { onAuthenticate } = useAuthAPI();
  return useMutation({
    mutationFn: async () => {
      await axiosInstance.post('/api/users/logout');
    },

    onSuccess: () => {
      onAuthenticate(false);
      router.navigate('/login');
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
    mutationFn: async (data: {
      email: string;
      password: string;
      activateToken: string;
    }) => {
      const { activateToken, ...restData } = data;
      await axiosInstance.patch(
        '/api/users/register',
        { ...restData },
        {
          headers: {
            Authorization: `Bearer ${activateToken}`,
          },
        },
      );
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
