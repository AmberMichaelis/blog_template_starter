/** @format */

import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/BlogTemplate Resources/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' paddingX='20px'>
      <Image src={logo} boxSize='60px' />
      <Text>
        <ColorModeSwitch />
      </Text>
    </HStack>
  );
};

export default NavBar;
