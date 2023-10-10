/** @format */

import { Heading } from '@chakra-ui/react';
import { PostQuery } from '../App';
import useIcon from '../hooks/useIcon';
import useTopic from '../hooks/useTopic';

interface Props {
  postQuery: PostQuery;
}

const PostHeading = ({ postQuery }: Props) => {
  // Returns dynamic heading based on filtering: Icon Topic Posts
  const topic = useTopic(postQuery.topicId);
  const icon = useIcon(postQuery.iconId);

  const heading = `${icon?.name || ''} ${topic?.name || ''} Posts`;
  return <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>;
};

export default PostHeading;
