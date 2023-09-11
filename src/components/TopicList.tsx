/** @format */

import useTopics from '../hooks/useTopics';

const TopicList = () => {
  const { topics } = useTopics();
  
  return (
    <ul>
      {topics.map(topic => 
        <li key={topic.id}>{topic.name}</li>
      )}
    </ul>
  );
};

export default TopicList;
