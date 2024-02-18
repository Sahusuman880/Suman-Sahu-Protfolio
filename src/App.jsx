import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Banner1 from "./Components/Banner1";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Header1 from "./Components/Header1";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-[rgba(22,87,217,0.3)]">
      {/* <Header />
      <Banner /> */}
      <Header1></Header1>
      <Banner1 />
      <About />
      <Education />
      <Skills></Skills>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
