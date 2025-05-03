import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchDadata = async (query: string) => {
  const { data } = await axiosInstance.post('/api/dadata/address', { query });
  return data;
};

export function useDadata(query: string) {
  return useQuery({
    queryKey: ['dadata', query],
    queryFn: async ({ signal }) => {
      await sleep(300);
      if (!signal?.aborted) {
        return fetchDadata(query);
      }
    },
    enabled: !!query,
  });
}
