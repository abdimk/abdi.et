'use client';

import { useState } from 'react';

const NAME_GIF = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHg3YWN3MTlidnZldTltaDFoYzMwYTYxZDNqNWdjdXp0aGR3YjNodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif";
const RESUME_GIF = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVib3dtY2I2bnNrZXhqM2U5bDNmazg0amd6Y3VtbnlndXJ1aGRkOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a3IWyhkEC0p32/giphy.gif";
const PIC_GIFS = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2k4amhtZ3UxZ2tvOWNnZHV1OHczdnprc2g2cmNrNHVyc2xzaWhoOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13n7XeyIXEIrbG/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTlycW55NTVjOGFpaWgwdTRzdzAyc2Nsc3l6OXc1a3FlbjkwcGMzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pumIQjPQ5Y7skwEZes/giphy.gif",
];

const HeroIntro = () => {
  const [nameHovered, setNameHovered] = useState(false);
  const [picHovered, setPicHovered] = useState(false);
  const [picGif, setPicGif] = useState(PIC_GIFS[0]);
  const [resumeHovered, setResumeHovered] = useState(false);

  return (
    <section className="w-full py-12 px-4 bg-card-bg/50 border border-border-color shadow-[4px_4px_0_var(--color-shadow-color)] transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text content */}
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl mb-4 leading-snug">
            Hola, I’m{' '}
            <span
              className="relative text-dot-color"
              onMouseEnter={() => setNameHovered(true)}
              onMouseLeave={() => setNameHovered(false)}
            >
              Abdisa
              {/* Hover GIF — above the word "Abdisa" */}
              {nameHovered && (
                <span className="absolute left-1/2 -translate-x-1/2 -top-28 z-10 transition-all duration-300 ease-in-out">
                  <img
                    src={NAME_GIF}
                    alt="Coding animation"
                    className="w-24 h-24 rounded-lg border-2 border-border-color shadow-custom-panel bg-card-bg object-cover"
                  />
                </span>
              )}
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-text text-center">
            A curious Backend, Web & Infrastructure Developer, crafting tools and products with a focus on clean code and fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <span
              className="relative"
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
            >
              <a
                href="https://drive.google.com/file/d/1Dem_qrC5oNkKbkKByf9Sv_llyIVEcL2O/view?usp=sharing"
                className="inline-block py-3 px-6 text-base font-bold border-2 border-text-color no-underline text-btn-primary-text bg-btn-primary-bg rounded-lg transition-colors duration-200 w-full sm:w-auto text-center hover:opacity-90 dark:bg-transparent dark:text-text-color dark:hover:bg-hover-bg dark:hover:opacity-100"
                download
              >
                📄 Download Resume
              </a>
              {/* Hover GIF — above the resume button */}
              {resumeHovered && (
                <span className="absolute left-1/2 -translate-x-1/2 -top-28 z-10 transition-all duration-300 ease-in-out">
                  <img
                    src={RESUME_GIF}
                    alt="Coding animation"
                    className="w-24 h-24 rounded-lg border-2 border-border-color shadow-custom-panel bg-card-bg object-cover"
                  />
                </span>
              )}
            </span>
            <a
              href="https://github.com/abdimk"
              className="inline-block py-3 px-6 text-base font-bold border-2 border-text-color no-underline text-text-color bg-transparent rounded-lg transition-colors duration-200 w-full sm:w-auto text-center hover:bg-hover-bg"
            >
              More About Me
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div
          className="flex-shrink-0 relative"
          onMouseEnter={() => {
            setPicGif(PIC_GIFS[Math.floor(Math.random() * PIC_GIFS.length)]);
            setPicHovered(true);
          }}
          onMouseLeave={() => setPicHovered(false)}
        >
          <img
            src="/images/abdisa.png"
            alt="Abdisa"
            className="w-48 h-48 md:w-64 md:h-64 object-contain shadow-lg"
          />
          {/* Hover GIF + caption — above the profile image */}
          {picHovered && (
            <span className="absolute left-1/2 -translate-x-1/2 -top-36 z-10 flex flex-col items-center gap-1 transition-all duration-300 ease-in-out">
              <img
                src={picGif}
                alt="Coding animation"
                className="w-24 h-24 rounded-lg border-2 border-border-color shadow-custom-panel bg-card-bg object-cover"
              />
              <span className="whitespace-nowrap text-xs font-medium bg-card-bg border border-border-color shadow-custom-panel px-2 py-1 rounded-sm text-muted-text">
                the hand is not mine it was mera's
              </span>
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
