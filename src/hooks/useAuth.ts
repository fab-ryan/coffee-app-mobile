import { useUserInfoQuery } from '@redux';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const { data, error, isLoading } = useUserInfoQuery(null);
  const [authenticated, setAuthenticated] = useState<boolean>(true);
  useEffect(() => {
    if (data && data.statusCode === 401) {
      setAuthenticated(false);
    } else if (data && data.statusCode === 200) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [data, error, isLoading]);

  return { authenticated, error, isLoading, data };
};
