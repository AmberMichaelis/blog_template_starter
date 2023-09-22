/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import BlogGrid from './components/BlogGrid';
import TopicList from './components/TopicList';
import { useState } from 'react';
import { Topic } from './hooks/useTopics';
import IconSelectorDropDown from './components/IconSelectorDropDown';
import { PlatformIcons } from './hooks/usePosts';

export interface PostQuery {
  topic: Topic | null;
  icon: PlatformIcons | null;
}

function App() {
  const [postQuery, setPostQuery] = useState<PostQuery>({} as PostQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <TopicList
            selectedTopic={postQuery.topic}
            onSelectTopic={(topic) => setPostQuery({ ...postQuery, topic })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <IconSelectorDropDown
          selectedIcon={postQuery.icon}
          onSelectIcon={(icon) => setPostQuery({ ...postQuery, icon })}
        />
        <BlogGrid postQuery={postQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
