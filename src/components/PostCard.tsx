/** @format */

import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { BlogPost } from '../hooks/usePosts';
import IconList from './IconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card height='100%'>
      <Image src={getCroppedImageUrl(post.background_image)} />
      <CardBody >
        <HStack justifyContent='space-between' marginBottom={3} >
          <IconList
            icons={post.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={post.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{post.name}<Emoji rating={post.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
};

export default PostCard;
