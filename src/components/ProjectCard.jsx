import React from 'react';

const ProjectCard = ({
  name,
  description,
  id,
  github,
  deployed,
  thumbnail,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-0 bg-indigo-50 rounded-lg shadow-card  hover:shadow-cardhover gap-2 md:max-h-[200px]">
      <div className="md:min-w-[20%]">
        <img
          src={thumbnail}
          alt={name}
          className="rounded-t-lg md:rounded-l-lg md:rounded-r-none object-cover w-full h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 p-8">
        <h3 className="font-light text-lg">{name}</h3>
        <p className="text-slate-500 font-light">{description}</p>
        <div className="font-light flex gap-4 justify-center mt-4">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="w-fit flex p-2 bg-indigo-100 rounded-lg shadow-card hover:shadow-cardhover gap-2"
          >
            <img
              src="/icons8-github-50 copy.png"
              alt="github"
              className="w-6"
            />
            View repo
          </a>
          <a
            href={deployed}
            target="_blank"
            rel="noreferrer"
            className="w-fit flex p-2 bg-indigo-100 rounded-lg shadow-card hover:shadow-cardhover gap-2"
          >
            <img src="/icons8-rocket-50.png" alt="deploy" className="w-6" />
            View deployed
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
