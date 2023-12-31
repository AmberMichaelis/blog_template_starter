/** @format */

import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import BlogGrid from './components/BlogGrid';
import TopicList from './components/TopicList';
import { useState } from 'react';
import IconSelectorDropDown from './components/IconSelectorDropDown';
import SortSelectorDropDown from './components/SortSelectorDropDown';
import PostHeading from './components/PostHeading';

export interface PostQuery {
  topicId?: number;
  iconId?: number;
  sortOrder: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => setPostQuery({ ...postQuery, searchText })}
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <TopicList
            selectedTopicId={postQuery.topicId}
            onSelectTopic={(topic) => setPostQuery({ ...postQuery, topicId: topic.id })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <PostHeading postQuery={postQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <IconSelectorDropDown
                selectedIconId={postQuery.iconId}
                onSelectIcon={(icon) => setPostQuery({ ...postQuery, iconId: icon.id })}
              />
            </Box>
            <SortSelectorDropDown
              sortOrder={postQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setPostQuery({ ...postQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <BlogGrid postQuery={postQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
