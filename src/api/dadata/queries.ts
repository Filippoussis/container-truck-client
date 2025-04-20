import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchDadata = async (query: string) => {
  const token = '35bae7d9c1d6e6ab711fdfa9ca2a95bdc7f51042';

  const { data } = await axios.post(
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    { query },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      },
    },
  );

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
