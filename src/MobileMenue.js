import React from 'react';
import { Link } from "react-router-dom";

function MobileMenue() {

  const link = {
    fontSize: '1rem',
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s linear',
    color: 'black'
  }

  const mobileNav = {
    display: 'none',
    flexDirection: 'columnd',
    justifyContent: 'centerd',
    height: '100vh',
    textAlign: 'left',
    padding: '2rem',
    position: 'absoluted',
    top: '0d',
    left: '0d',
    transition: 'transform 0.3s ease-in-out'
  }


return (
  <React.Fragment>
    <div style={mobileNav} className='mobileNav'>
      <ul id='navLinksLeft'>
        <li> <Link to='/about' style={link}> About </Link> </li>
        <li> <Link to='/projects' style={link}> Projects </Link> </li>
        <li> <Link to='/contact' style={link}> Contact </Link> </li>
      </ul>
      <a href='/' title='Homepage' style={link}> <h6> Masha Ivy </h6></a>
      <ul id='navLinksRight'>
        <li> <a href='https://www.linkedin.com/in/masha-ivy/' style={link}> L </a> </li>
      </ul>
    </div>
  </React.Fragment>
);
}
export default MobileMenue
