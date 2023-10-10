/** @format */

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useIcons, { Icon } from '../hooks/useIcons';
import useIcon from '../hooks/useIcon';

interface Props {
  onSelectIcon: (icon: Icon) => void;
  selectedIconId?: number;
}

const IconSelectorDropDown = ({ onSelectIcon, selectedIconId }: Props) => {
  const { data, error } = useIcons();
  const selectedIcon = useIcon(selectedIconId)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedIcon?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((icon: Icon) => (
          <MenuItem onClick={() => onSelectIcon(icon)} key={icon.id}>
            {icon.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default IconSelectorDropDown;
