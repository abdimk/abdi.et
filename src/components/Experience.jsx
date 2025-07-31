import { useState } from 'react'; 
import ExperienceCard from './ExperienceCard';

const experienceData = [
  {
    jobTitle: "Backend Engineer / DevOps at Nilode",
    location: "(remote)",
    date: "Mar 2025 - Present",
    description: "Responsible for developing various backend systems with a strong focus on web scraping and automation using Python.Worked extensively with technologies such as Next.js,Puppeteer,Selenium, FastAPI, PostgreSQL, and Docker."
  },
  {
    jobTitle: "Backend Engineer / Data Analytics",
    location: "at INSA (Intership onsite)",
    date: "July 2024 - Sep 2024",
    description: "Developed a distributed facial recognition and activity tracking attendance system.The system leverages Apache Kafka to stream video from multiple CCTV cameras, processes the data through a TensorFlow model, retrieves user information from SQLite"
  },
  {
    jobTitle: "Backend Developer (python)",
    location: "at Ethio aliance (onsite / remote)",
    date: "Oct 2023 - May 2024",
    description: "Initiated continuous improvement and efficiency gains by automating the filtering and processing of 75,000 business records, eliminating hours of manual work. The Business Directory API, built using FastAPI, Uvicorn, and JWT, resulted in improved data accuracy and company performance."
  },
  {
    jobTitle: "BackEnd Engineer",
    location: "at Scale AI (remote)",
    date: "Mar 2022 - Sep 2022",
    description: "Contributed to building high-performance backend services for data annotation pipelines, focusing on optimizing database queries and API endpoints to efficiently handle large-scale data. Worked as a Backend Engineer using FastAPI, Django, and Flask, and developed NLP applications with Python and Julia. Gained experience in distributed systems and cloud environments."
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