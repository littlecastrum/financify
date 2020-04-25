import React, { useState, useRef, FunctionComponent, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useOutsideClick } from 'utils/hooks';
import styles from './styles.module.css';

type Props = {
  icon: ReactElement,
  url?: string,
}

const NavItem: FunctionComponent<Props> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useOutsideClick(ref, () => {
    setOpen(false)
  });

  return (
    <li className={styles.main} ref={ref}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        {icon}
      </button>
      <CSSTransition
        in={open}
        timeout={500}
        classNames={{ ...styles }}
        unmountOnExit>
        {children}
      </CSSTransition>
    </li>
  );
}

export default NavItem;
