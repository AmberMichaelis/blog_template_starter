/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // larger than 1024px
      }}
    >
      <GridItem area='nav' bg='#394341'>
        Nav
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside' bg='#DBD3C6'>
        Nav
      </GridItem>
      </Show>
      <GridItem area='main' bg='deeppink'>
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
