import { useEffect, useState } from "react";
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
import { ItemContext } from "./Store/store";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === "true");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };
  return (
    <ItemContext.Provider
      value={{ isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode }}
    >
      <Header1></Header1>
      <Banner1 />
      <About />
      <Education />
      <Skills></Skills>
      <Project />
      <Contact />
      <Footer />
    </ItemContext.Provider>
  );
}

export default App;
