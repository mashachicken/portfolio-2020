import React from 'react';
import Header from './Header'
import Burger from './Burger'
import MobileMenue from './MobileMenue'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Header/>
        <Burger/>
        <MobileMenue/>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
