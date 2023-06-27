import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const Main = () => {
  return (
    <section id="landing" className="flex flex-col-reverse gap-4 sm:flex-row">
      <div className="flex flex-col gap-10 sm:w-[50%]">
        <h3 className="text-lg font-semibold px-5 py-2 bg-indigo-50 rounded-xl w-fit">
          Full Stack Developer
        </h3>
        <h1 className="text-6xl font-medium">Nelson Morillo</h1>
        <p className="font-extralight text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quam
          obcaecati vitae consectetur animi aliquam assumenda, possimus quidem
          quis dolore, deleniti aliquid pariatur.
        </p>
        <div className="flex gap-20 justify-center items-center">
          <Link
            to="/#projects"
            className="font-inter font-medium bg-indigo-200 py-2 px-4 rounded-xl w-[100px] text-center"
          >
            Projects
          </Link>
          <Link
            to="/#about"
            className="font-inter font-medium bg-indigo-200 py-2 px-4 rounded-xl w-[100px] text-center"
          >
            About
          </Link>
        </div>
      </div>
      <div>
        <img src={reactLogo} alt="img" className="w-32" />
      </div>
    </section>
  );
};

export default Main;
