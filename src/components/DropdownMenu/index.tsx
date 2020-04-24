import React, { useState, useEffect, useRef, FunctionComponent } from 'react';
import { Transition } from 'react-transition-group';

import { ReactComponent as CogIcon } from 'assets/icons/bell.svg';
import { ReactComponent as ChevronIcon } from 'assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from 'assets/icons/bolt.svg';



import DropdownItem from './DropdownItem';
import styles from './style.module.css';

enum MenuOptions {
  MAIN = 'MAIN',
  SETTINGS = 'SETTINGS',
  ANIMALS = 'ANIMALS'
}

const DropdownMenu: FunctionComponent = () => {
  const [activeMenu, setActiveMenu] = useState<MenuOptions>(MenuOptions.MAIN);
  const [menuHeight, setMenuHeight] = useState<number>(NaN);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = dropdownRef.current?.firstChild as HTMLElement;
    setMenuHeight(elem.offsetHeight);
  }, [])

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  console.log(activeMenu)

  return (
    <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>
      <Transition
        in={activeMenu === MenuOptions.MAIN}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}>
        {state => (
          <div className={`${styles[state]} ${styles.menu}`}>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu={() => setActiveMenu(MenuOptions.SETTINGS)}>
              Settings
              </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu={() => setActiveMenu(MenuOptions.ANIMALS)}>
              Animals
              </DropdownItem>
          </div>
        )}
      </Transition>

      <Transition
        in={activeMenu === MenuOptions.SETTINGS}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}>
        {state => {
          console.log('on settings', state)
          return (
            <div className={`${styles[`scondary-${state}`]} ${styles.menu}`}>
              <DropdownItem goToMenu={() => setActiveMenu(MenuOptions.MAIN)} leftIcon={<ArrowIcon />}>
                <h2>My Tutorial</h2>
              </DropdownItem>
              <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
              <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
              <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
              <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
            </div>
          )
        }}
      </Transition>

      <Transition
        in={activeMenu === MenuOptions.ANIMALS}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}>
        {state => {
          console.log('on animals', state)
          return (
            <div className={`${styles[`scondary-${state}`]} ${styles.menu}`}>
              <DropdownItem goToMenu={() => setActiveMenu(MenuOptions.MAIN)} leftIcon={<ArrowIcon />}>
                <h2>Animals</h2>
              </DropdownItem>
              <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
              <DropdownItem leftIcon="🐸">Frog</DropdownItem>
              <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
              <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
            </div>
          )
        }}
      </Transition>
    </div>
  );
}

export default DropdownMenu;
