import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import Header from './Header'
import Burger from './Burger'
import MobileMenue from './MobileMenue'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Img1 from './Img1'
import Img2 from './Img2'
import Content2 from './Content2'
import HeroContent from './HeroContent'
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
        <Switch>
        <Route exact path='/'>
        <Img1/>
        <HeroContent/>
        <Img2/>
        <Content2/>
        </Route>
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
        </div>
    </Router>
    </div>
  );
}

export default App;
