import React from 'react';
import { Link } from "react-router-dom";

function MobileMenue() {

  const link = {
    fontSize: '1rem',
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.3rem',
    textDecoration: 'none',
    transition: 'color 0.3s linear',
    color: 'black'
  }

  const mobileNav = {
    display: 'none'
  }

  const headName = {
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s linear',
    color: 'black',
    position: 'fixed',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '92%',
    marginTop: '2%',
    marginRight: '2%',
    marginLeft: '2%',
    WebkitBoxOrient: 'horizontal',
    WebkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    WebkitBoxPack: 'center',
    WebkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    WebkitFlexWrap: 'wrap',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    WebkitBoxAlign: 'end',
    WebkitAlignItems: 'flex-end',
    msFlexAlign: 'end',
    alignItems: 'flex-end',
    gridAutoColumns: '1fr',
    gridColumnGap: '16px',
    gridRowGap: '16px',
    textAlign: 'center'

  }

  const navLinksLeft = {
    flexDirection: 'column',
    justifyContent: 'center',
    listStyleType: 'none',
    height: '100vh',
    background: '#b8b8b8',
    position: 'absolute',
    padding: '2rem',
    padding: '0',
    width: '120px',
    textAlign: 'left',
    zIndex: '-1',
    paddingTop: '50%',
    lineHeight: '79px',
    transition: 'transform 0.3s ease-in-out'
  }

  const name = {

  }


return (
  <React.Fragment>
    <div style={mobileNav} className='mobileNav'>
      <ul id='navLinksLeft' style={navLinksLeft}>
        <li> <Link to='/about' style={link}> About </Link> </li>
        <li> <Link to='/projects' style={link}> Projects </Link> </li>
        <li> <Link to='/contact' style={link}> Contact </Link> </li>
        <li> <a href='https://www.linkedin.com/in/masha-ivy/' style={link}> L </a> </li>
      </ul>
      <a href='/' title='Homepage' style={headName}> <h6 style={name}> Masha Ivy </h6></a>
      </div>
  </React.Fragment>
);
}
export default MobileMenue
