/** @format */

import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';
import PostCardContainer from './PostCardContainer';
import { PostQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  postQuery: PostQuery;
}

const BlogGrid = ({ postQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePosts(postQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
      <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Spinner />}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding='10px'>
          {isLoading &&
            skeletons.map((skeleton) => (
              <PostCardContainer key={skeleton}>
                <PostCardSkeleton />
              </PostCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((post) => (
                <PostCardContainer key={post.id}>
                  <PostCard post={post} />
                </PostCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
  );
};

export default BlogGrid;
