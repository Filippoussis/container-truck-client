import { Navigate } from 'react-router-dom';
import { useQueryMe } from '@/api/users/queries';

interface Props {
  element: React.ReactElement;
}

export const PrivateRoute: React.FC<Props> = ({ element }) => {
  const { isPending, isSuccess } = useQueryMe();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    return element;
  }

  return <Navigate to="/login" />;
};
