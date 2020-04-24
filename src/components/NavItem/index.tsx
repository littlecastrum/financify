import React, { useState, useRef, FunctionComponent, ReactElement } from 'react';
import { Transition } from 'react-transition-group';

import { useOutsideClick } from 'utils/hooks';
import styles from './style.module.css';

type Props = {
  icon: ReactElement,
  url?: string
}

const NavItem: FunctionComponent<Props> = ({ icon, url, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useOutsideClick(ref, () => {
    setOpen(false)
  });

  return (
    <li className={styles.main} ref={ref}>
      <a href={url} className={styles.button} onClick={() => setOpen(!open)}>
        {icon}
      </a>
      <Transition in={open} timeout={100}>
        {state => <div className={styles[state]}>{children}</div>}
      </Transition>
    </li>
  );
}

export default NavItem;
