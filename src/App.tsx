import React from 'react';

import Navbar from 'components/Navbar';
import NavItem from 'components/NavItem';
import DropdownMenu from 'components/DropdownMenu';

import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from 'assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from 'assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
