import TopBar from "./components/TopBar";
import HeroIntro from "./components/HeroIntro";
import AboutMe from "./components/AboutMe";
import LanguagesTools from "./components/LanguagesTools";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

const App = () => {
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
    
  )
}

export default App