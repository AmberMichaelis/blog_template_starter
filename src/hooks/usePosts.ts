/** @format */

import useData from './useData';
import { Topic } from './useTopics';

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

const usePosts = (
  selectedTopic: Topic | null,
  selectedIcon: PlatformIcons | null
) =>
  useData<BlogPost>(
    '/games',
    {
      // These params have to have the same name as in the api
      params: {
        genres: selectedTopic?.id,
        platforms: selectedIcon?.id,
      },
    },
    [selectedTopic?.id, selectedIcon?.id]
  );

export default usePosts;
