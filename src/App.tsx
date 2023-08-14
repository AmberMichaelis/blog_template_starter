/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import BlogGrid from './components/BlogGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // larger than 1024px
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside'>
        Aside
      </GridItem>
      </Show>
      <GridItem area='main'>
        <BlogGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
