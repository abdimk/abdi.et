'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experienceData = [
  {
    jobTitle: "Birrlink Payment Soultion(Core Payment Solution Engineer)",
    location: "Addis Abeba, Ethiopia",
    date: "Feb 2025 - Present",
    description: "Working on core payment system architecture"
  },
  {
    jobTitle: "Zenphony",
    location: "(remote)",
    date: "Sep 2025 - Nov 2025",
    description: "• Building reusable automation systems with fastAPI,express.js and docker, developing user-friendly websites using Next.js, automating desktop applications and integrating with existing system architectures."
  },
  {
    jobTitle: "Backend Engineer / DevOps at Nilode",
    location: "(remote)",
    date: "Mar 2025 - Aug 2025",
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
  const [visibleCount, setVisibleCount] = useState(3);

  const handleCardClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, experienceData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    setOpenIndex(null);
  };

  const visibleData = experienceData.slice(0, visibleCount);
  const hasMore = visibleCount < experienceData.length;
  const canShowLess = visibleCount > 3;

  return (
    <section>
      <h3 className="text-3xl font-semibold md:text-4xl text-center mb-6">Work Experience</h3>
      <div className="flex flex-col gap-4">
        {visibleData.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            index={index}
            isOpen={openIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {/* Load More / Show Less — brutalist pill buttons */}
      {(hasMore || canShowLess) && (
        <div className="flex justify-center mt-8 gap-6">
          {canShowLess && (
            <button
              onClick={handleShowLess}
              className="flex items-center gap-2 px-6 py-2.5 border-2 border-black bg-white shadow-[4px_4px_0_black] hover:bg-black hover:text-white hover:shadow-[4px_4px_0_#666] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 font-main text-sm font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              aria-label="Show less experience"
            >
              <ChevronDown className="w-4 h-4 rotate-180" />
              <span>LESS</span>
            </button>
          )}
          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-6 py-2.5 border-2 border-black bg-white shadow-[4px_4px_0_black] hover:bg-black hover:text-white hover:shadow-[4px_4px_0_#666] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 font-main text-sm font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              aria-label="Show more experience"
            >
              <span>MORE</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Experience;