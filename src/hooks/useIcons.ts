/** @format */

import { useQuery } from '@tanstack/react-query';
import icons from '../data/icons';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Icon>('/platforms/lists/parents');

export interface Icon {
  id: number;
  name: string;
  slug: string;
}

const useIcons = () =>
  useQuery({
    queryKey: ['icons'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // will request update from backend every 24 hours
    initialData: icons,
  });

export default useIcons;
