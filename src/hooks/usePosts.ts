/** @format */

import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// This interface is defined on https://api.rawg.io/docs/#operation/games_list. Parameters are listed under "results".
export interface BlogPost {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{ platform: Platform }[]
    metacritic: number;
}

// This interface is defined on https://api.rawg.io/docs/#operation/games_list. Paramenters are listed under "results schema".
interface FetchBlogResponse {
    count: number;
    results: BlogPost[];
}

const usePosts = () => {
  const [posts, setPost] = useState<BlogPost[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchBlogResponse>('/games', { signal: controller.signal }) // the games endpoint comes from the API
      .then((res) => {
        setPost(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { posts, error, isLoading };
};

export default usePosts;
