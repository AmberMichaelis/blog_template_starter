/** @format */

import useData from './useData';

interface IconsInMenu {
  id: number;
  name: string;
  slug: string;
}

const useIcons = () => useData<IconsInMenu>('/platforms/lists/parents'); //From the parent platform rawg api https://api.rawg.io/docs/#operation/platforms_lists_parents_list

export default useIcons;
