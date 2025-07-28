import { useRef, useEffect, useState } from 'react'; 
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceCard = ({ jobTitle, location, date, description, isOpen, onClick }) => {
  
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

  return (
    <div className="border border-black bg-panel-text p-4 shadow-experience-card transition-all duration-500 hover:-translate-y-1 hover:shadow-4 hover:bg-gray-600 hover:text-white">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <p className="flex-grow">
          <span className="font-bold">{jobTitle}</span> {location}
        </p>
        <p className="font-mono font-medium text-base sm:text-lg mr-4">
          {date}
        </p>

        {/* Toggle Icon */}
        <div>
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-black" />
          ) : (
            <ChevronDown className="w-6 h-6 text-black" />
          )}
        </div>
      </div>

      {/* Accordion Content - Apply dynamic max-height from state */}
      <div
        ref={contentRef} // Assign the ref here
        style={{ maxHeight: contentHeight }} // Apply the dynamic height
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 mt-4' : 'opacity-0' // Opacity changes immediately, height smoothly animates
        }`}
      >
        <p className="text-base sm:text-lg border-t border-black pt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;