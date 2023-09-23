/** @format */

import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/BlogTemplate Resources/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX='20px' marginY={5}>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <Text>
        <ColorModeSwitch />
      </Text>
    </HStack>
  );
};

export default NavBar;
