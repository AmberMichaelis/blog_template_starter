/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import BlogGrid from './components/BlogGrid';
import TopicList from './components/TopicList';
import { useState } from 'react';
import { Topic } from './hooks/useTopics';


function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // larger than 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <TopicList selectedTopic={selectedTopic} onSelectTopic={(topic) => setSelectedTopic(topic)} />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <BlogGrid selectedTopic={selectedTopic} />
      </GridItem>
    </Grid>
  );
}

export default App;
