import React from 'react';
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <ul class="nav-links-left">
        <li class='list-1'> <Link to='/about' class='nav-link'> About </Link> </li>
        <li class='list-2'> <Link to='/projects' class='nav-link-2'> Projects </Link> </li>
        <li class='list-3'> <Link to='/contact' class='nav-link-3'> Contact </Link> </li>
      </ul>
      <h6 class='heading'> Masha Ivy </h6>
      <ul class='nav-links-right'>
        <li class='list-4'> <a href='https://www.linkedin.com/in/masha-ivy/'> L </a> </li>
      </ul>
    </React.Fragment>
  );
}
export default Header
