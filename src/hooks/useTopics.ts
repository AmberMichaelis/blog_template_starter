/** @format */

import topics from '../data/topics';

export interface Topic {
  id: number;
  name: string;
  image_background: string;
}

const useTopics = () => ({ data: topics, isLoading: false, error: null });

export default useTopics;
