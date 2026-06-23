// Thin CSS crosshair corner mark — matches the reference design
const CornerMark = ({ position }) => {
  const posClass = {
    'top-left':     '-top-[5px] -left-[5px]',
    'top-right':    '-top-[5px] -right-[5px]',
    'bottom-left':  '-bottom-[5px] -left-[5px]',
    'bottom-right': '-bottom-[5px] -right-[5px]',
  }[position];

  return (
    <span
      className={`absolute ${posClass} w-[10px] h-[10px]`}
      aria-hidden="true"
    >
      {/* horizontal bar */}
      <span className="absolute top-1/2 left-0 w-full h-[1px] bg-border-color -translate-y-1/2" />
      {/* vertical bar */}
      <span className="absolute left-1/2 top-0 h-full w-[1px] bg-border-color -translate-x-1/2" />
    </span>
  );
};

const ProjectCard = ({ image, alt, title, tags, description, liveLink, sourceLink, sourceText = "Source" }) => {
  return (
    <div className="relative bg-white shadow-project-card border border-border-color p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-none">
      <CornerMark position="top-left" />
      <CornerMark position="top-right" />
      <CornerMark position="bottom-left" />
      <CornerMark position="bottom-right" />

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