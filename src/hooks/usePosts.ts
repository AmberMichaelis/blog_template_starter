/** @format */

import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

const usePosts = () => {
  const [posts, setPost] = useState<BlogPost[]>([]);
  const [error, setError] = useState('');

  // This interface is defined on https://api.rawg.io/docs/#operation/games_list. Parameters are listed under "results".
  interface BlogPost {
    id: number;
    name: string;
  }

  // This interface is defined on https://api.rawg.io/docs/#operation/games_list. Paramenters are listed under "results schema".
  interface FetchBlogResponse {
    count: number;
    results: BlogPost[];
  }

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchBlogResponse>('/games') // this endpoint comes from the API
      .then((res) => setPost(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
    });

      return () => controller.abort();
  });

  return { posts, error };
};

export default usePosts;
