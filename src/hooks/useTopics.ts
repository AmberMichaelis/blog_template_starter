/** @format */

import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Topic {
  id: number;
  name: string;
}

interface FetchTopicsResponse {
  count: number;
  results: Topic[];
}

const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchTopicsResponse>('/genres', { signal: controller.signal }) // the topics endpoint comes from the API
      .then((res) => {
        setTopics(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { topics, error, isLoading };
};

export default useTopics;
