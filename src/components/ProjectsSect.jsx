import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../projects';

const ProjectsSect = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center px-6 sm:px-20"
    >
      <h2>Projects</h2>
      <div className="flex flex-col gap-6 sm:gap-14">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSect;
