import Link from 'next/link';

import {useState} from 'react';
import {HamburgerBtnActive} from '../../Atoms/Hamburger/Button/HamburgerBtnActive';
import {HamburgerBtn} from '../../Atoms/Hamburger/Button/HamburgerBtn';
import {HamburgerMenu, HamburgerMenuActive} from './styled';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div onClick={handleBtn}>
          <HamburgerBtnActive />
        </div>
      ) : (
        <div onClick={handleBtn}>
          <HamburgerBtn />
        </div>
      )}

      <nav>
        <div className="flex items-center pl-8 h-14">
          {isOpen ? (
            <HamburgerMenuActive className="flex space-x-4">
              <Link href="/">
                <a className="ml-4 sm:m-0">Home LINK</a>
              </Link>
              <Link href="/about">
                <a className="ml-4 sm:m-0">About LINK</a>
              </Link>
            </HamburgerMenuActive>
          ) : (
            <HamburgerMenu className="flex space-x-4">
              <Link href="/">
                <a className="ml-4 sm:m-0">Home LINK</a>
              </Link>
              <Link href="/about">
                <a className="ml-4 sm:m-0">About LINK</a>
              </Link>
            </HamburgerMenu>
          )}
        </div>
      </nav>
    </>
  );
}
