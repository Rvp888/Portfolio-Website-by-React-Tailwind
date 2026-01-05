import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />

      <SocialLinks />
      <ScrollToTop />
    </div>
  );
}

export default App;
