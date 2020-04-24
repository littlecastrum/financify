import React, { FunctionComponent } from 'react';
import style from './style.module.css';

const Navbar: FunctionComponent = ({ children }) => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbarElement}>{children}</ul>
    </nav>
  );
};

export default Navbar;
