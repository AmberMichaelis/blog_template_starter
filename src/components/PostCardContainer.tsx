import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

// Basic styles for cards and loading skeletons
const PostCardContainer = ({children}: Props) => {
  return (
    <Box width='300px' borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default PostCardContainer