import ProjectCard from './ProjectCard';
import { projects } from '../../projects';

const ProjectsSect = () => {
  return (
    <section
      id='projects'
      className='w-full flex flex-col items-center justify-center'
    >
      <h2 className='text-4xl font-light my-10'>Projects</h2>
      <div className='flex flex-col gap-6 sm:gap-14'>
        {projects
          .map((project) => <ProjectCard key={project.id} {...project} />)
          .reverse()}
      </div>
    </section>
  );
};

export default ProjectsSect;
