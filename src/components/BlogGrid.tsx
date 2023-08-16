/** @format */

import { Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';

const BlogGrid = () => {
    const {posts, error} = usePosts();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogGrid;
