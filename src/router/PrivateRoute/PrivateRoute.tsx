import { useEffect, useState } from 'react';
import { useAuthState } from '@/services/AuthProvider';
import { useMe } from '@/api/users/queries';

interface Props {
  element: React.ReactElement;
}

export const PrivateRoute: React.FC<Props> = ({ element }) => {
  const [shouldFetch, changeShouldFetch] = useState(false);
  const { isAuthenticated } = useAuthState();
  useMe(shouldFetch);

  useEffect(() => {
    if (!isAuthenticated) {
      changeShouldFetch(true);
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return element;
  }

  return (
    <p style={{ textAlign: 'center' }}>
      Извините, сервер временно недоступен, попробуйте войти позднее...
    </p>
  );
};
