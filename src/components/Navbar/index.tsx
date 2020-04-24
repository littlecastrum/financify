import React, { FunctionComponent } from 'react';
import styles from './style.module.css';

const Navbar: FunctionComponent = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarElement}>{children}</ul>
    </nav>
  );
};

export default Navbar;
