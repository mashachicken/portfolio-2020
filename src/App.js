import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import Header from './Header'
import Burger from './Burger'
import MobileMenue from './MobileMenue'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import MainContent from './MainContent'
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let [open, setOpen] = useState(false);
  const node = useRef();
useOnClickOutside(node, () => setOpen(false));
  return (
    <div className='background'>
      <Router>
        <Header/>
        <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <MobileMenue open={open} setOpen={setOpen}/>
        </div>
        <MainContent/>
        <Switch>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/about'>
          <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
