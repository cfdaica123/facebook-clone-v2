// clsx
import clsx from 'clsx';

import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';

function Header() {
  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50',
        'container md:py-0 flex items-center justify-between shadow-md',
        'bg-light dark:bg-dark'
      )}>
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </header>
  );
}

export default Header;
