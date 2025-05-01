import { Stack } from '@mui/material';
import { useQueryOrders } from '@/api/orders/queries';
import { Order } from '@/components/Order';

export const Home = () => {
  const { data } = useQueryOrders();

  return (
    <Stack spacing={1}>
      {data?.map((order) => <Order key={order.id} {...order} />)}
    </Stack>
  );
};
