import React, { useState, FunctionComponent, ReactElement } from 'react';
import style from './style.module.css';

type Props = {
  icon: ReactElement,
  url?: string
}

const NavItem: FunctionComponent<Props> = ({ icon, url, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={style.main}>
      <a href={url} className={style.button} onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && children}
    </li>
  );
}

export default NavItem;
