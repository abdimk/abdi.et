const HeroIntro = () => {
  return (
    <section className="w-full text-center py-19 px-4 bg-[rgba(229,231,235,0.5)] border border-border-color shadow-[4px_4px_0_rgba(0,0,0,0.9)]">
      <h1 className="text-4xl font-semibold  md:text-5xl mb-4 leading-snug">
        Hola, I’m <span className="text-dot-color">Abdisa</span>
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700">
        A curious Backend Developer, crafting tools & products with a focus on clean code and quick delivery.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
        <a
          href="https://raw.githubusercontent.com/abdimk/abdimk/main/abdisa.pdf"
          className="inline-block py-3 px-6 text-base font-bold border-2 border-text-color no-underline text-white bg-text-color rounded-lg transition-colors duration-200 w-full sm:w-auto text-center"
          download
        >
          📄 Download Resume
        </a>
        <a
          href="https://github.com/abdimk"
          className="inline-block py-3 px-6 text-base font-bold border-2 border-text-color no-underline text-text-color bg-transparent rounded-lg transition-colors duration-200 w-full sm:w-auto text-center hover:bg-gray-100"
        >
          More About Me
        </a>
      </div>
    </section>
  );
};

export default HeroIntro;
