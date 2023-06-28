import React from 'react';
import { skills } from '../../projects/skills';

const Skills = () => {
  return (
    <section className="my-14 text-center" id="skills">
      <h3 className="text-4xl font-light mb-10">Skills</h3>
      <div className="flex gap-12 flex-wrap px-10 justify-center items-center">
        {skills.map((skill, index) => {
          return <img src={skill} key={index} className="w-20" />;
        })}
      </div>
    </section>
  );
};

export default Skills;
