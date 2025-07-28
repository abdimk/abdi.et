const ProjectCard = ({ image, alt, title, tags, description, liveLink, sourceLink, sourceText = "Source" }) => {
  return (
    <div className="bg-white shadow-project-card border border-border-color p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-none">
      <img src={image} alt={alt} className="w-full h-auto block border-b border-border-color mb-3 rounded" />
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <div className="mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-300 text-black text-xs mr-1 py-0.5 px-1.5 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex gap-4">
        {liveLink && (
          <a href={liveLink} target="_blank" className="py-1.5 px-4 text-sm font-bold border-2 border-text-color no-underline text-white bg-text-color rounded hover:bg-black">
            Site
          </a>
        )}
        <a href={sourceLink} target="_blank" className="py-1.5 px-4 text-sm font-bold border-2 border-text-color no-underline text-text-color bg-transparent rounded hover:bg-gray-100">
          {sourceText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;