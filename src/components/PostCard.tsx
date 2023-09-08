/** @format */

import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { BlogPost } from '../hooks/usePosts';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card width='300px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(post.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{post.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={post.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={post.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default PostCard;
