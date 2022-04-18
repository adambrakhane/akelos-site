import React from "react";
import "./App.css";
import Nav from "./Nav";
import Masthead from "./Masthead";
import PrimaryContent from "./PrimaryContent";
import Projects from "./Projects";
import Signup from "./Signup";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  // On first mount, set up the listeners
  React.useEffect(() => {
    // Set up the listeners
    /*!
     * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
     * Copyright 2013-2022 Start Bootstrap
     * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
     */
    //
    // Scripts
    //
  }, []);

  return (
    <>
      <Nav />
      <Masthead />
      <PrimaryContent
        // img="/img/houseRoof.jpg"
        title="We are currently not taking new projects"
        href="about"
      >
        But you can absolutely <a href="#signup">contact us</a> if you would
        like to connect.
      </PrimaryContent>
      <Projects />
      <Signup />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
