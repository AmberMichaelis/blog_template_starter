/** @format */

import useTopics from '../hooks/useTopics';

const TopicList = () => {
  const { data } = useTopics()
  
  return (
    <ul>
      {data.map(topic => 
        <li key={topic.id}>{topic.name}</li>
      )}
    </ul>
  );
};

export default TopicList;
