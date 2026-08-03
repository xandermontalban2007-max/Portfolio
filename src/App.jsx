import { MotionConfig } from "framer-motion";

import MainLayout from "./layout/MainLayout";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";

const smoothTransition = {
  type: "tween",
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1],
};

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={smoothTransition}>
      <MainLayout>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </MainLayout>
    </MotionConfig>
  );
}

export default App;
