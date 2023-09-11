/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import BlogGrid from './components/BlogGrid';
import TopicList from './components/TopicList';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside"`,
        lg: `"nav nav" "aside main"` // larger than 1024px
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside'>
        <TopicList />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <BlogGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
