import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <ul class="nav-links-left">
        <li class='list-1'> <Link to='/about' class='nav-link'> About </Link> </li>
        <li class='list-2'> <a href='/projects' class='nav-link-2'> Projects </a> </li>
        <li class='list-3'> <a href='/contacts' class='nav-link-3'> Contacts </a> </li>
      </ul>
      <h6 class='heading'> Masha Ivy </h6>
      <ul class='nav-links-right'>
        <li class='list-4'> L </li>
      </ul>


    </React.Fragment>
  );
}

export default App;
