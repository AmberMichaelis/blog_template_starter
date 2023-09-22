/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';
import PostCardContainer from './PostCardContainer';
import { Topic } from '../hooks/useTopics';
import { PlatformIcons } from '../hooks/usePosts';

interface Props {
  selectedTopic: Topic | null;
  selectedIcon: PlatformIcons | null;
}

const BlogGrid = ({ selectedTopic, selectedIcon }: Props) => {
  const { data, error, isLoading } = usePosts(selectedTopic, selectedIcon);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={3}
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
    </>
  );
};

export default BlogGrid;
