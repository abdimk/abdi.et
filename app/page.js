import TopBar from "@/src/components/TopBar";
import HeroIntro from "@/src/components/HeroIntro";
import AboutMe from "@/src/components/AboutMe";
import LanguagesTools from "@/src/components/LanguagesTools";
import Education from "@/src/components/Education";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto grid gap-8 p-0 max-w-6xl">
      <TopBar />
      <HeroIntro />
      <AboutMe />
      <LanguagesTools />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}
