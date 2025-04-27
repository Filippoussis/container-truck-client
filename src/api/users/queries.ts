import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';
import { useAuthAPI } from '@/services/AuthProvider';

export const useMe = (shouldFetch: boolean = false) => {
  const { onAuthenticate } = useAuthAPI();
  return useQuery({
    queryKey: ['me', { shouldFetch }],
    queryFn: () =>
      axiosInstance.get('/api/users/me').then((res) => {
        onAuthenticate(true);
        return res.data;
      }),
    enabled: shouldFetch,
  });
};
