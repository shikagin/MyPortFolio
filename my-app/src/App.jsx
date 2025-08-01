import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { useEffect } from "react";


function App() {
   useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
   });

  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
