import React, {useState, useEffect} from 'react'
import LoadImg from './Assets/Loader.gif'

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Preloader from './components/Preloader';


function App() {

  // Loader Page.
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  var navbar = false;

  // Actual Website.
  return (
    <div>
      <Preloader load={loading}/>
      <div>  
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
