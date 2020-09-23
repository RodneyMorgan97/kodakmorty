import React, { useState, useEffect } from 'react';

import logo from './logo1.svg';
import Hamburger from './Icons/Hamburger.js'

import Projects from './Projects/Projects.js';
import Landscape from './Landscape/Landscape.js';
import Monochrome from './Monochrome/Monochrome.js';
import OriginalArtwork from './OriginalArtwork/OriginalArtwork.js';
import Portrait from './Portrait/Portrait.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';


function App() {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="Header">
          <img src={logo} className="logo" alt="logo" />
          <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
          >
            <nav className="Nav">
              <Link to="/" className="item">Projects</Link>
              <Link to="/Landscape" className="item">Landscape</Link>
              <Link to="/Monochrome" className="item">Monochrome</Link>
              <Link to="/OriginalArtwork" className="item">Original Artwork</Link>
              <Link to="/Portrait" className="item">Portrait</Link>
              <Link to="/About" className="item">About</Link>
              <Link to="/Contact" className="item">Contact</Link>
            </nav>
          </CSSTransition>
          <div onClick={toggleNav} className="Burger">
            <Hamburger />
          </div>
        </header>
      </div>

      <Route exact path="/" component={Projects} />
        <Route path="/Landscape" component={Landscape} />
        <Route path="/Monochrome" component={Monochrome} />
        <Route path="/OriginalArtwork" component={OriginalArtwork} />
        <Route path="/Portrait" component={Portrait} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
    </BrowserRouter>
    
  );
}

export default App;
