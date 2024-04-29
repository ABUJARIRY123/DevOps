import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import React, {useState} from 'react'
function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />

    </div>
  );
}

export default App;
