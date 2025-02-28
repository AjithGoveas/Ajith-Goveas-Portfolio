import { lazy, Suspense, memo } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./pages/Hero.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const App = () => {
  const Name = "Ajith Goveas";

  return (
    <div className="App">
      <Header />
      <Hero name={Name} />
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <About />
        <Projects />
        <Contact />
      </Suspense>
      <Footer name={Name} />
    </div>
  );
};

export default memo(App);
