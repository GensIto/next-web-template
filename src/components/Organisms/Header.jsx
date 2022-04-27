import React from 'react';
import Hamburger from '../Molecules/Hamburger/Hamburger';

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4">
      <img src="./vercel.svg" alt="logo" />
      <Hamburger />
    </header>
  );
};
