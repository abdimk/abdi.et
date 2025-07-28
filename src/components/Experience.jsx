import { useState } from 'react'; 
import ExperienceCard from './ExperienceCard';

const experienceData = [
  {
    jobTitle: "Backend / DevOps at Nilode",
    location: "(remote)",
    date: "Mar 2025 - Present",
    description: "Currently leading backend development and DevOps initiatives, focusing on scalable microservices and robust deployment pipelines using Kubernetes and CI/CD best practices. Working with Python and Go."
  },
  {
    jobTitle: "Machine Learning Engineer",
    location: "at INSA (Intership onsite)",
    date: "July 2024 - Sep 2024",
    description: "Developed and deployed machine learning models for image recognition and natural language processing. Focused on data preprocessing, model training, and integration into existing systems. Utilized TensorFlow and PyTorch."
  },
  {
    jobTitle: "Automation Engineer and Web Dev",
    location: "at Ethio aliance (onsite / remote)",
    date: "Oct 2023 - May 2024",
    description: "Designed and implemented automation scripts to streamline internal processes, significantly reducing manual effort. Also contributed to front-end and backend web development using Django and React, improving user interfaces and API performance."
  },
  {
    jobTitle: "BackEnd Engineer",
    location: "at Scale AI (remote)",
    date: "Mar 2022 - Sep 2022",
    description: "Contributed to building high-performance backend services for data annotation pipelines. Focused on optimizing database queries and API endpoints to handle large volumes of data efficiently. Gained experience in distributed systems and cloud environments."
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h3 className="text-3xl font-semibold md:text-4xl text-center mb-6">Work Experience</h3>
      <div className="flex flex-col gap-4">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            index={index} 
            isOpen={openIndex === index} 
            onClick={() => handleCardClick(index)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;