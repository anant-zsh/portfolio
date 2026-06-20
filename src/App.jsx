import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FixedLinks from "./components/FixedLinks.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <FixedLinks />
      <div className="h-screen overflow-y-auto overscroll-none bg-[hsl(0,0%,0%)]">
        <Header />
        <div className="mx-[11vw]">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Socials />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
