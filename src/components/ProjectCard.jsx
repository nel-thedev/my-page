import React from 'react';

const ProjectCard = ({ name, description, id, github, deployed }) => {
  return (
    <div className="flex p-4 bg-indigo-50 rounded-lg shadow-card  hover:shadow-cardhover">
      <div className="w-[20%]">
        <img src="#" alt={name} />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h3 className="font-light">{name}</h3>
        <p className="text-slate-800 font-light">{description}</p>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={deployed} target="_blank" rel="noreferrer">
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
