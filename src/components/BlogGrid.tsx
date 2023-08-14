/** @format */

import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

const BlogGrid = () => {
  const [post, setPost] = useState<BlogPost[]>([]);
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
    apiClient
      .get<FetchBlogResponse>('/games')
      .then((res) => setPost(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {post.map((post) => (
          <li key={post.id}>
            {post.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogGrid;
