const ExperienceCard = ({ jobTitle, location, date }) => {
  return (
    <div className="border py-2 px-2 border-black  bg-panel-text p-1 shadow-experience-card transition-all duration-500 hover:-translate-y-1 hover:shadow-none hover:bg-gray-600 hover:text-white flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <p>
        <span className="font-bold">{jobTitle}</span> {location}
      </p>
      <p className="font-mono font-medium text-base sm:text-lg">
        {date}
      </p>
    </div>
  );
};

export default ExperienceCard;