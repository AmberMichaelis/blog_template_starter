/** @format */

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Icon as Icona } from '../hooks/useIcons';
import { IconType } from 'react-icons';

interface Props {
  icons: Icona[];
}

const IconList = ({ icons }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // slug: icon
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    andriod: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {icons.map((icon) => (
        <Icon as={iconMap[icon.slug]} key={icon.id} color='gray.500' />
      ))}
    </HStack>
  );
};

export default IconList;
