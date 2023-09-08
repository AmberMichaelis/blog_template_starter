/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';

const BlogGrid = () => {
  const { posts, error, isLoading } = usePosts();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading && skeletons.map((skeleton) => <PostCardSkeleton key={skeleton}/>)}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BlogGrid;
