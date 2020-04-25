import React, { useState, useEffect, useRef, FunctionComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CogIcon } from 'assets/icons/bell.svg';
import { ReactComponent as ChevronIcon } from 'assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from 'assets/icons/bolt.svg';

import { getTransitionClasses } from 'utils/components';

import DropdownItem from './DropdownItem';
import styles from './styles.module.css';

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

  return (
    <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === MenuOptions.MAIN}
        timeout={500}
        classNames={getTransitionClasses(styles, 'left')}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
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
      </CSSTransition>
      <CSSTransition
        in={activeMenu === MenuOptions.SETTINGS}
        timeout={500}
        classNames={getTransitionClasses(styles, 'right')}
        unmountOnExit
        onEnter={calcHeight}>

        <div className={styles.menu}>
          <DropdownItem goToMenu={() => setActiveMenu(MenuOptions.MAIN)} leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === MenuOptions.ANIMALS}
        timeout={500}
        classNames={getTransitionClasses(styles, 'right')}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem goToMenu={() => setActiveMenu(MenuOptions.MAIN)} leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
