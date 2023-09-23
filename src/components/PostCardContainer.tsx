import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

// Basic styles for cards and loading skeletons
const PostCardContainer = ({children}: Props) => {
  return (
    <Box width="100%" borderRadius={10} overflow='hidden' border='1px' borderColor='magenta'>
        {children}
    </Box>
  )
}

export default PostCardContainer
