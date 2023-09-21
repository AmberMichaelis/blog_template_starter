/** @format */

import useData from './useData';
import { Topic } from './useTopics';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// This interface is defined on https://api.rawg.io/docs/#operation/games_list. Parameters are listed under "results".
export interface BlogPost {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const usePosts = (selectedTopic: Topic | null) =>
  useData<BlogPost>('/games', { params: { genres: selectedTopic?.id } }, [
    selectedTopic?.id,
  ]);

export default usePosts;
