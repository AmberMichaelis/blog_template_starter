/** @format */

import { Heading } from '@chakra-ui/react';
import { PostQuery } from '../App';
import useTopics from '../hooks/useTopics';
import useIcons from '../hooks/useIcons';

interface Props {
  postQuery: PostQuery;
}

const PostHeading = ({ postQuery }: Props) => {
  // Returns dynamic heading based on filtering: Icon Topic Posts
  const {data: topics } = useTopics();
  const topic = topics?.results.find(t => t.id === postQuery.topicId);

  const {data: icons } = useIcons();
  const icon = icons?.results.find(i => i.id === postQuery.iconId);

  const heading = `${icon?.name || ''} ${topic?.name || ''} Posts`;
  return <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>;
};

export default PostHeading;
