import { useMe } from '@/api/users/queries';
import { useAuthState } from '@/services/AuthProvider';
import { useEffect, useState } from 'react';

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

  return null;
};
