import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import programming from '../assets/undraw_programming_re_kg9v.svg';

const Main = () => {
  return (
    <section
      id="landing"
      className="flex flex-col-reverse gap-4 sm:flex-row h-[87vh]"
    >
      <div className="flex flex-col gap-10 sm:w-[50%] justify-center items-center md:items-start">
        <h3 className="text-lg font-normal px-5 py-2 bg-indigo-50 rounded-xl w-fit">
          Full Stack Developer
        </h3>
        <h1 className="text-6xl font-medium">Nelson Morillo</h1>
        <p className="font-extralight text-slate-500">
          JavaScript | React.js | Node.js | Express.js | MongoDB
        </p>
        <div className="flex gap-10 justify-center items-center">
          <Link
            to="/#projects"
            className="font-inter font-medium border border-indigo-100 hover:bg-indigo-100 py-2 px-4 rounded-xl w-[100px] text-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector('#projects').offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            Projects
          </Link>
          <Link
            to="/#skills"
            className="font-inter font-medium border border-indigo-100 hover:bg-indigo-100 py-2 px-4 rounded-xl w-[100px] text-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector('#skills').offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            Skills
          </Link>
          <Link
            to="/#about"
            className="font-inter font-medium border border-indigo-100 hover:bg-indigo-100 py-2 px-4 rounded-xl w-[100px] text-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector('#about').offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center m-auto">
        <img src={programming} alt="img" className="w-[80%]" />
      </div>
    </section>
  );
};

export default Main;
