import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ downloadResume }) => {
  const click = (e) => {
    e.preventDefault();
    console.log(e);
    window.scrollTo({
      top: document.querySelector(`${e.target}`),
      behavior: 'smooth',
    });
  };

  return (
    <nav className="flex w-full justify-between items-center bg-slate-50 sm:px-20 px-6 py-5 border-b border-b-slate-100 font-light">
      <h1 className="text-xl">Nelson Morillo</h1>
      <div className="flex gap-5 sm:gap-10">
        <li
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector('#projects').offsetTop,
              behavior: 'smooth',
            });
          }}
          className="list-none cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-slate-300"
        >
          Projects
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector('#skills').offsetTop,
              behavior: 'smooth',
            });
          }}
          className="list-none cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-slate-300"
        >
          Skills
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector('#about').offsetTop,
              behavior: 'smooth',
            });
          }}
          className="list-none cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-slate-300"
        >
          About
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector('#about').offsetTop,
              behavior: 'smooth',
            });
          }}
          className="list-none cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-slate-300"
        >
          Resume
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
