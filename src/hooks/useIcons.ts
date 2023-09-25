/** @format */

import { useQuery } from '@tanstack/react-query';
import icons from '../data/icons';
import apiClient, { FetchResponse } from '../services/api-client';
import { Icons } from './usePosts';

// const useIcons = () => ({ data: icons, isLoading: false, error: null });

const useIcons = () =>
  useQuery({
    queryKey: ['icons'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Icons>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // will request update from backend every 24 hours
    initialData: { count: icons.length, results: icons },
  });

export default useIcons;
