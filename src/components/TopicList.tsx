/** @format */

import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useTopics from '../hooks/useTopics';
import getCroppedImageUrl from '../services/image-url';

const TopicList = () => {
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
            <Text fontSize='lg'>{topic.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default TopicList;
