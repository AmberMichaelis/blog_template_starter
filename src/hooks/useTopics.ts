/** @format */

import useData from './useData';

export interface Topic {
  id: number;
  name: string;
}

const useTopics = () =>  useData<Topic>('/genres');

export default useTopics;
