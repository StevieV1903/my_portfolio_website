import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from "./Components/NavBarComponent/NavBar.js"
import HomePage from "./Components/HomePageComponent/HomePage.js"
import About from "./Components/AboutComponent/About.js"
import Projects from "./Components/ProjectsComponent/Projects.js"
import Contact from "./Components/ContactComponent/Contact.js"
import Footer from "./Components/FooterComponent/Footer.js"


const App = () => {

  return (

    <BrowserRouter>
    
    <NavBar />

    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/About" component={ About }/>
      <Route path="/Projects" component={ Projects }/>
      <Route path="/Contact" component={ Contact }/>
    </Switch>

    <Footer />

    </BrowserRouter>
    
  );
}

export default App;
