/** @format */

import { Heading } from '@chakra-ui/react';
import { PostQuery } from '../App';

interface Props {
  postQuery: PostQuery;
}

const PostHeading = ({ postQuery }: Props) => {
  // Returns dynamic heading based on filtering: Icon Topic Posts
  const heading = `${postQuery.icon?.name || ''} ${postQuery.topic?.name || ''} Posts`;
  return <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>;
};

export default PostHeading;
