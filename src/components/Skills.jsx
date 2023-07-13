import React from 'react';
import { skills } from '../../projects/skills';

const Skills = () => {
  return (
    <section className="my-14 text-center" id="skills">
      <h3 className="text-4xl font-light mb-10">Skills</h3>
      <div className="flex gap-12 flex-wrap px-10 justify-center items-center">
        {skills.map((skill, index) => {
          return (
            <div className="group relative flex items-center justify-center">
              <img src={skill.img} key={index} className="w-20 relative" />
              <span class="pointer-events-none absolute -top-7  w-max opacity-0 transition-opacity group-hover:opacity-100 bg-indigo-50 py-1 px-2 rounded-lg ">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
