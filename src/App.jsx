import TopBar from "./components/TopBar";
import HeroIntro from "./components/HeroIntro";
import AboutMe from "./components/AboutMe";
import LanguagesTools from "./components/LanguagesTools";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
     <div className="container mx-auto grid gap-8 p-0 max-w-6xl">
      <TopBar />
      <HeroIntro />
      <AboutMe />
      <LanguagesTools />
      <Projects />
      <Experience />
      <Footer />
    </div>
    
  )
}

export default App