'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const courses = [
  "Data Structures & Algorithms",
  "Computer Programming",
  "Network Administration",
  "Object Oriented Programming",
  "Distributed Systems",
  "Advanced Databases",
  "Computer Security",
];

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setContentHeight(`${contentRef.current.scrollHeight + 20}px`);
      } else {
        setContentHeight('0px');
      }
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <h3 className="text-3xl font-semibold md:text-4xl text-center mb-6">
        Education
      </h3>

      <div className="border border-border-color bg-card-bg p-4 shadow-experience-card transition-all duration-500 hover:-translate-y-1 hover:shadow-4 hover:bg-hover-bg hover:text-text-color">
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <p className="flex-grow">
            <span className="font-bold">Hawassa University</span> Hawassa, Ethiopia
          </p>
          <p className="font-mono font-medium text-base sm:text-lg mr-4">
            Sep 2022 - Jan 2025
          </p>
          <div>
            {isOpen ? (
              <ChevronUp className="w-6 h-6 text-text-color" />
            ) : (
              <ChevronDown className="w-6 h-6 text-text-color" />
            )}
          </div>
        </div>

        {/* Accordion Content */}
        <div
          ref={contentRef}
          style={{ maxHeight: contentHeight }}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 mt-4' : 'opacity-0'
          }`}
        >
          <div className="border-t border-border-color pt-4">
            <p className="text-base sm:text-lg mb-3">
              Bachelor&apos;s of Information System — <span className="italic">Informatics</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="border border-border-color/40 bg-card-bg py-2 px-3 rounded-sm text-sm transition-all duration-200 hover:bg-hover-bg hover:border-border-color"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
