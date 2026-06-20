import useReveal from "./hooks/useReveal";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechOrbit from "./components/TechOrbit";
import About from "./components/About";
// import Stats from "./components/Stats";
import Projects from "./components/Projects";
import MiniProjects from "./components/MiniProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  useReveal();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TechOrbit />
        <About />
        {/* <Stats /> */}
        <Projects />
        <MiniProjects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
