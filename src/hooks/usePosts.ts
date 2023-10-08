/** @format */

import { useInfiniteQuery } from '@tanstack/react-query';
import { PostQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';
import { Icon } from './useIcons';

const apiClient = new APIClient<Post>('/games');

// This interface is defined on https://api.rawg.io/docs/#operation/games_list. Parameters are listed under "results".
export interface Post {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Icon }[];
  metacritic: number;
  rating_top: number;
}

const usePosts = (postQuery: PostQuery) =>
  useInfiniteQuery<FetchResponse<Post>, Error>({
    queryKey: ['posts', postQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: postQuery.topic?.id,
          parent_platforms: postQuery.icon?.id,
          ordering: postQuery.sortOrder,
          search: postQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePosts;
