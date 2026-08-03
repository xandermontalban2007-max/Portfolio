import MainLayout from "./layout/MainLayout";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <MainLayout>
      <Hero />

      <About />

      <Services />

      <Skills />

      <Projects />

      <Education />

      <Contact />
    </MainLayout>
  );
}

export default App;