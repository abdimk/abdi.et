const HeroIntro = () => {
  return (
    <section className="w-full text-center py-19 px-4 bg-card-bg/50 border border-border-color shadow-[4px_4px_0_var(--color-shadow-color)] transition-colors duration-300">
      <h1 className="text-4xl font-semibold  md:text-5xl mb-4 leading-snug">
        Hola, I’m <span className="text-dot-color">Abdisa</span>
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-text">
        A curious Backend Developer, crafting tools & products with a focus on clean code and quick delivery.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
        <a
          href="https://drive.google.com/file/d/1LzsJIGSDBu1dikBeA9hXK6lIPGhSa-et/view?usp=sharing"
          className="inline-block py-3 px-6 text-base font-bold border-2 border-text-color no-underline text-btn-primary-text bg-btn-primary-bg rounded-lg transition-colors duration-200 w-full sm:w-auto text-center hover:opacity-90 dark:bg-transparent dark:text-text-color dark:hover:bg-hover-bg dark:hover:opacity-100"
          download
        >
          📄 Download Resume
        </a>
        <a
          href="https://github.com/abdimk"
          className="inline-block py-3 px-6 text-base font-bold border-2 border-text-color no-underline text-text-color bg-transparent rounded-lg transition-colors duration-200 w-full sm:w-auto text-center hover:bg-hover-bg"
        >
          More About Me
        </a>
      </div>
    </section>
  );
};

export default HeroIntro;
