import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from './components/Hero/Hero.js'
import NavBar from './components/NavBar/NavBar.js'

import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'


function App() {
  return(
    <Router>
      <NavBar />
      <Hero />
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
        <Route path="/resume" exact component={() => <Home />} />
        <Route path="/blog" exact component={() => <Home />} />
      </Switch>
    </Router>
  )
}

export default App;
