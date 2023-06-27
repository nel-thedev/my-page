import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../projects';
import ProjectCard from '../components/ProjectCard';
import reactLogo from '../assets/react.svg';
import Main from '../components/Main';
import ProjectsSect from '../components/ProjectsSect';

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center px-6 sm:px-20">
      <Main />
      <ProjectsSect />
    </main>
  );
};

export default Home;
