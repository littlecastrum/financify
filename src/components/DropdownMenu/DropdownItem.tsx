import React, { FunctionComponent, ReactElement } from 'react';
import style from './style.module.css'

type Props = {
  url?: string,
  goToMenu?: () => void,
  leftIcon?: ReactElement | string,
  rightIcon?: ReactElement | string
}

const DropdownItem: FunctionComponent<Props> = ({ url, goToMenu, leftIcon, rightIcon, children }) => {
  return (
    <a href={url} className={style.item} onClick={goToMenu}>
      <span className={style.left}>{leftIcon}</span>
      {children}
      <span className={style.right}>{rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
