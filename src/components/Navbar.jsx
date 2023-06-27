import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center bg-slate-50 sm:px-20 px-6 py-4 border-b border-b-slate-100 font-light">
      <h1 className="text-xl">Nelson Morillo</h1>
      <div className="flex gap-4 sm:gap-10">
        <Link to="/#projects">Projects</Link>
        <Link to="/#about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
