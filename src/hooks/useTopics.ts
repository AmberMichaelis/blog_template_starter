/** @format */

import { useQuery } from '@tanstack/react-query';
import topics from '../data/topics';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Topic {
  id: number;
  name: string;
  image_background: string;
}

const useTopics = () =>
  useQuery({
    queryKey: ['topics'],
    queryFn: () =>
      apiClient.get<FetchResponse<Topic>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // will request update from backend every 24 hours
    initialData: { count: topics.length, results: topics },
  });

export default useTopics;
