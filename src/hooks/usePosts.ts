/** @format */

import { useQuery } from '@tanstack/react-query';
import { PostQuery } from '../App';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Icons {
  id: number;
  name: string;
  slug: string;
}

// This interface is defined on https://api.rawg.io/docs/#operation/games_list. Parameters are listed under "results".
export interface BlogPost {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Icons }[];
  metacritic: number;
  rating_top: number;
}

const usePosts = (postQuery: PostQuery) =>
  useQuery<FetchResponse<BlogPost>, Error>({
    queryKey: ['posts', postQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<BlogPost>>('/games', {
          params: {
            genres: postQuery.topic?.id,
            parent_platforms: postQuery.icon?.id,
            ordering: postQuery.sortOrder,
            search: postQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default usePosts;
