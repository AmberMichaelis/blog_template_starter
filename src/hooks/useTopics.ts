/** @format */

import useData from './useData';

export interface Topic {
  id: number;
  name: string;
  image_background: string;
}

const useTopics = () =>  useData<Topic>('/genres');

export default useTopics;
