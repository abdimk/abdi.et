import React from 'react';
import ExperienceCard from './ExperienceCard';

const experienceData = [
  {
    jobTitle: "Backend / DevOps at Nilode",
    location: "(remote)",
    date: "Mar 2025 - Present"
  },
  {
    jobTitle: "Machine Learning Engineer",
    location: "at INSA (Intership onsite)",
    date: "July 2024 - Sep 2024"
  },
  {
    jobTitle: "Automation Engineer and Web Dev",
    location: "at Ethio aliance (onsite / remote)",
    date: "Oct 2023 - May 2024"
  },
  {
    jobTitle: "BackEnd Engineer",
    location: "at Scale AI (remote)",
    date: "Mar 2022 - Sep 2022"
  },
];

const Experience = () => {
  return (
    <section>
      <h3 className="text-3xl font-semibold md:text-4xl text-center mb-6">Work Experience</h3>
      <div className="flex  flex-col gap-4">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;