/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';
import PostCardContainer from './PostCardContainer';

const BlogGrid = () => {
  const { data, error, isLoading } = usePosts();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <PostCardContainer>
              <PostCardSkeleton key={skeleton} />
            </PostCardContainer>
          ))}
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BlogGrid;
