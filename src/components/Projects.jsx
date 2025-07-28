import ProjectCard from './ProjectCard';

const projectsData = [
  {
    image: "/images/monitor.png",
    alt: "image of a silus monitoring platfrom",
    title: "Silus Metrics",
    tags: ["Go", "TypeScript", "Bash", "Nextjs"],
    description: "Silus Monitoring Tool [API, Docker, Podman, K8s]",
    liveLink: null, // "https://your-live-site.com"
    sourceLink: "https://github.com/abdimk",
    sourceText: "(Ongoing)"
  },
  {
    image: "/images/jobhub.png",
    alt: "Jobhub screenshot",
    title: "JobHub",
    tags: ["Nextjs", "FastAPI", "Selenium"],
    description: "a simple nextjs / fastapi website that allows you to search for jobs with different parameters.",
    liveLink: "https://job-hub-blond.vercel.app/",
    sourceLink: "https://github.com/abdimk/JobHub",
  },
  {
    image: "images/netflowUI.png",
    alt: "Nextflow Screenshot",
    title: "NextFlow",
    tags: ["Nextjs", "TypeScript"],
    description: "The frontend part of the nextflow ui. Uses nextjs 15 [realtime collaboration platfrom]",
    liveLink: "https://next-flow-smoky.vercel.app/",
    sourceLink: "https://github.com/abdimk/NextFlowUI",
  },
  {
    image: "/images/slang.png",
    alt: "Slang Terminal Screenshot",
    title: "Slang",
    tags: ["Python", "Aiohttp", "Rich"],
    description: "Slang alows you to send and customize your LLM form terminal [No Tokens Required]",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/Slang",
  },
  {
    image: "/images/loham.png",
    alt: "Loham API Screenshot",
    title: "Loham",
    tags: ["Python", "FastAPI", "JWT", "Uvicorn"],
    description: "Business Directory API built on top of FastAPI and Uvicorn Server uses JWT for authentication and authorization.",
    liveLink: "https://loham.onrender.com/",
    sourceLink: "https://github.com/abdimk/loham",
  },
  {
    image: "/images/realimeface.png",
    alt: "realimeface-system Screenshot",
    title: "Real-Time Facial Attendance System for INSA",
    tags: ["Python", "Opencv", "Kafa", "Sqlite", "ElasticSearch", "Kibana"],
    description: "This repository contains the Setup and Configration for activity and facial recogniton attendance system.",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/facial_analysis",
  },
  {
    image: "/images/graphene.png",
    alt: "Graphene Manager Screenshot",
    title: "Graphene",
    tags: ["Python", "Pyside6", "PyQt5"],
    description: "Graphene is a cross-platform python PySide project for retrieving information on running processes and system utilization in Python.",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/Graphene",
  },
  {
    image: "/images/Weather AppFinal.png",
    alt: "CSharpWeatherApp Screenshot",
    title: "Weather App in C#",
    tags: ["C#", "Open-Meteo", "NewtonSoft"],
    description: "This app is built using WinForms in C#. It utilizes the Open-Meteo API for fetching weather data and OpenSourceMap for obtaining geocoordinate locations.",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/CSharpWeatherApp",
  },
  {
    image: "/images/ethiojobsCrawl.png",
    alt: "ethiojobs Screenshot",
    title: "EthioJobs",
    tags: ["Python", "Beautiful Soup", "Scrapy"],
    description: "This python package is built over beautiful soup and scrapy and helps you to scrap information from the website with out getting your IP banned also supports different data formats JSON, XML",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/ethiojobs",
  },
  {
    image: "/images/snakeML.png",
    alt: "snakeML Screenshot",
    title: "Snake 2077",
    tags: ["C++", "SFML", "GL"],
    description: "A Snake Game Built with SFML with all the movment logic written",
    liveLink: "https://x.com/abdisamk/status/1834297812751642793",
    sourceLink: "https://github.com/abdimk/Snake",
  },
  {
    image: "/images/telegrambot.png",
    alt: "TelegramBot Screenshot",
    title: "Babylon",
    tags: ["Python", "Telepot", "Resproxy"],
    description: "This telegram bot will help you to translate languages and to detect any languages then converting them to google-text-to-speech(gTTS module)",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/babylon",
  },
  {
    image: "/images/googleVNC.png",
    alt: "Google dev VncScreenshot",
    title: "Google Dev Vnc Server",
    tags: ["C++", "Python"],
    description: "This GitHub repository is a great resource for anyone looking to learn how to set up Chrome desktop view in the Google Developer Console.",
    liveLink: null,
    sourceLink: "https://github.com/abdimk/Google-dev-VNC",
  },
];

const Projects = () => {
  return (
    <section className="mt-4">
      <h1 className="text-2xl font-semibold md:text-5xl text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;