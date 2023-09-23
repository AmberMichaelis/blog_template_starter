/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';
import PostCardContainer from './PostCardContainer';
import { PostQuery } from '../App';

interface Props {
  postQuery: PostQuery;
}

const BlogGrid = ({ postQuery }: Props) => {
  const { data, error, isLoading } = usePosts(postQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <PostCardContainer key={skeleton}>
              <PostCardSkeleton />
            </PostCardContainer>
          ))}
        {data.map((post) => (
          <PostCardContainer key={post.id}>
            <PostCard post={post} />
          </PostCardContainer>
        ))}
      </SimpleGrid>
  );
};

export default BlogGrid;
