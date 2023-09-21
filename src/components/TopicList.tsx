/** @format */

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useTopics, { Topic } from '../hooks/useTopics';
import getCroppedImageUrl from '../services/image-url';
// import { wrap } from 'framer-motion';

interface Props {
  onSelectTopic: (topic: Topic) => void;
}

const TopicList = ({ onSelectTopic }: Props) => {
  const { data, isLoading, error } = useTopics();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((topic) => (
        <ListItem key={topic.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(topic.image_background)}
            />
            <Button
              onClick={() => onSelectTopic(topic)}
              fontSize='lg'
              // whiteSpace={wrap}
              textAlign='left'
              variant='link'
            >
              {topic.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default TopicList;
