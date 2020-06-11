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
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'left',
    padding: '2rem',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'transform 0.3s ease-in-out'
  }

  const headName = {
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s linear',
    color: 'black'
  }

  const navLinksLeft = {

    listStyleType: 'none',
    padding: '0',
    zIndex: '10'
  }

return (
  <React.Fragment>
    <div style={mobileNav} className='mobileNav'>
      <ul id='navLinksLeft' style={navLinksLeft}>
        <li> <Link to='/about' style={link}> About </Link> </li>
        <li> <Link to='/projects' style={link}> Projects </Link> </li>
        <li> <Link to='/contact' style={link}> Contact </Link> </li>
      </ul>
      <a href='/' title='Homepage' style={headName}> <h6> Masha Ivy </h6></a>
      <ul id='navLinksRight'>
        <li> <a href='https://www.linkedin.com/in/masha-ivy/' style={link}> L </a> </li>
      </ul>
    </div>
  </React.Fragment>
);
}
export default MobileMenue
