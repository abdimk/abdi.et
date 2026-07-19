'use client';

import { useState } from 'react';

const langs = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", alt: "Go", title: "Go" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux", title: "Linux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", title: "Docker" },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/de2c1f96ff6e74ea7ea979b43202e8d4b863c655/logos/fastapi-icon.svg", alt: "FastAPI", title: "FastAPI"},
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes", title: "Kubernetes" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django", title: "Django", darkInvert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", title: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", title: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", alt: "Redis", title: "Redis" },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/de2c1f96ff6e74ea7ea979b43202e8d4b863c655/logos/gin.svg", alt:"Gin", title:"Gin"},
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", alt: "Jenkins", title: "Jenkins" },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prometheus.svg", alt: "Prometheus", title: "Prometheus" },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/hadoop.svg", alt: "Hadoop", title: "Hadoop" },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/kafka.svg", alt: "Kafka", title: "Kafka", darkInvert: true },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/elasticsearch.svg", alt: "Elasticsearch", title: "Elasticsearch" },
  { src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/apache-spark.svg", alt: "PySpark", title: "PySpark" },
  
];

const GIPHY_URL = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzU4bTBwZzhkdjhxNG80eTkwcXowcnVvbW05amh1MWpka2pxanZ2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P8ef3Dkynk0xLx1h1T/giphy.gif";

const LanguagesTools = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="text-xl relative">
      <h3 className="text-2xl md:text-3xl text-center mb-4">
        <span
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Programming
          {/* Hover GIF — exactly above the word "Programming" */}
          {isHovered && (
            <span className="absolute left-1/2 -translate-x-1/2 -top-24 z-10 transition-all duration-300 ease-in-out">
              <img
                src={GIPHY_URL}
                alt="Coding animation"
                className="w-20 h-20 md:w-24 md:h-24 rounded-lg border-2 border-border-color shadow-custom-panel bg-card-bg object-cover"
              />
            </span>
          )}
        </span>
        {' '}Languages and Dev Tools I work with
      </h3>

      <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
        {langs.map((lang, index) => (
          <span key={index} className="relative inline-flex">
            <img
              src={lang.src}
              alt={lang.alt}
              title={lang.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-8 h-8 md:w-10 md:h-10 filter grayscale-[70%] contrast-[120%] transition-transform duration-200 hover:scale-125 hover:grayscale-0 hover:contrast-100 ${lang.darkInvert ? 'dark:invert' : ''}`}
            />
            {/* Hover GIF — above the icon */}
            {hoveredIndex === index && lang.gif && (
              <span className="absolute left-1/2 -translate-x-1/2 -top-20 z-10 transition-all duration-300 ease-in-out">
                <img
                  src={lang.gif}
                  alt={`${lang.title} animation`}
                  className="w-48 h-auto rounded-lg border-2 border-border-color shadow-custom-panel bg-card-bg"
                />
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LanguagesTools;