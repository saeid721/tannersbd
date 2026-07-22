/**
 * useApi — generic data-fetching hook with loading/error state
 *
 * Usage:
 *   const { data, loading, error, refetch } = useApi(getPhotos, { page: 1 });
 */

import { useState, useEffect, useCallback } from 'react';

const useApi = (apiFn, params = null, { immediate = true } = {}) => {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError]     = useState(null);

  const execute = useCallback(
    async (overrideParams) => {
      setLoading(true);
      setError(null);
      try {
        const result = await apiFn(overrideParams ?? params);
        setData(result);
        return result;
      } catch (err) {
        setError(err?.message || 'Something went wrong.');
        return null;
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apiFn, JSON.stringify(params)]
  );

  useEffect(() => {
    if (immediate) execute();
  }, [execute, immediate]);

  return { data, loading, error, refetch: execute };
};

export default useApi;
