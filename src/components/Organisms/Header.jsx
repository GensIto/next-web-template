import Link from 'next/link';
import React from 'react';
import Hamburger from '../Molecules/Hamburger/Hamburger';

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4">
      <Link href="/">
        <img className="w-16" src="./vercel.svg" alt="logo" />
      </Link>
      <Hamburger />
    </header>
  );
};
