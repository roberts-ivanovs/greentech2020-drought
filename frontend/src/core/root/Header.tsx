import React from 'react';
import '../../utils/StyleUtils.scss';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export function Header(): React.ReactElement {
  return (
    <div>
      <nav>
        <Link
          to={{ pathname: '/' }}
        >
          Sākums
        </Link>
        <Link
          to={{ pathname: 'about' }}
        >
          Par
        </Link>
      </nav>
    </div>
  );
}
