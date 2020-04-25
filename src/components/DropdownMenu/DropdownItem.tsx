import React, { FunctionComponent, ReactElement } from 'react';
import styles from './styles.module.css'

type Props = {
  url?: string,
  goToMenu?: () => void,
  leftIcon?: ReactElement | string,
  rightIcon?: ReactElement | string
}

const DropdownItem: FunctionComponent<Props> = ({ url, goToMenu, leftIcon, rightIcon, children }) => {
  return (
    <a href={url} className={styles.item} onClick={goToMenu}>
      <span className={styles.left}>{leftIcon}</span>
      {children}
      <span className={styles.right}>{rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
