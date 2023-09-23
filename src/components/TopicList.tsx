/** @format */

import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useTopics, { Topic } from '../hooks/useTopics';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectTopic: (topic: Topic) => void;
  selectedTopic: Topic | null;
}

const TopicList = ({ onSelectTopic, selectedTopic }: Props) => {
  const { data, isLoading, error } = useTopics();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Topics</Heading>
      <List>
        {data.map((topic) => (
          <ListItem key={topic.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(topic.image_background)}
              />
              <Button
                onClick={() => onSelectTopic(topic)}
                fontSize='lg'
                fontWeight={topic.id === selectedTopic?.id ? 'bold' : 'normal'}
                whiteSpace='normal'
                textColor={topic.id === selectedTopic?.id ? 'magenta' : '#fff'}
                textAlign='left'
                variant='link'
              >
                {topic.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TopicList;
