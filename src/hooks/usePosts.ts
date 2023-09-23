/** @format */

import { PostQuery } from '../App';
import useData from './useData';

export interface PlatformIcons {
  id: number;
  name: string;
  slug: string;
}

// This interface is defined on https://api.rawg.io/docs/#operation/games_list. Parameters are listed under "results".
export interface BlogPost {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformIcons }[];
  metacritic: number;
}

const usePosts = (postQuery: PostQuery) =>
  useData<BlogPost>(
    '/games',
    {
      // These params keys have to have the same name as in the api
      params: {
        genres: postQuery.topic?.id,
        platforms: postQuery.icon?.id,
        ordering: postQuery.sortOrder,
        search: postQuery.searchText
      },
    },
    [postQuery]
  );

export default usePosts;
