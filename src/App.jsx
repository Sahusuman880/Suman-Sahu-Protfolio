import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Banner1 from "./Components/Banner1";
import Education from "./Components/Education";
import { Header } from "./Components/Header";
import Header1 from "./Components/Header1";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className=" bg-slate-200">
      {/* <Header />
      <Banner /> */}
      <Header1></Header1>
      <Banner1 />
      <About />
      <Education />
      <Skills></Skills>
      <Project />
    </div>
  );
}

export default App;
