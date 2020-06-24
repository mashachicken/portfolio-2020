import React from 'react';
import { Link } from "react-router-dom";

function Header(){
  const navLinksLeft = {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '22%',
    paddingRight: '17%',
    marginBottom: '5%',
    paddingLeft: '0px',
    paddingLeft: '0px',
    listStyleType: 'none'
  }

  const link1 = {

  }
  const navBar = {
    position: 'fixed',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    width: '92%',
    marginTop: '2%',
    marginRight: '2%',
    marginLeft: '2%',
    WebkitBoxOrient: 'horizontal',
    WebkitBoxDirection: 'normal',
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
    msGridColumns: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    msGridRows: 'auto auto',
    textAlign: 'center'
  }
  const navLink = {
    textDecoration: 'none',
    paddingRight: '40px',
    color: '#000000'
  }
  const navLink2 = {
    textDecoration: 'none',
    paddingRight: '40px',
    color: '#000000'

  }
  const link2 = {

  }
  const link3 = {

  }
  const navLink3 = {
    textDecoration: 'none',
    color: '#000000'
  }

  const heading = {
    marginBottom: '4%',
    marginTop: '2%',
    position: 'static',
    display: '-webkit-box',
    display: '-webkit-fle',
    display: '-ms-flexbox',
    display: 'flex',
    marginLeft: '15%',
    marginRight: '15%',
    WebkitBoxOrient: 'horizontal',
    WebkitBoxDirection: 'normal',
    WebkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    msFlexAlign: 'end',
    WebkitAlignSelf: 'auto',
    msFlexItemAlign: 'auto',
    alignSelf: 'auto',
    WebkitBoxOrdinalGroup: '1',
    WebkitOrder: '0',
    msFlexOrder: '0',
    order: '0',
    WebkitBoxFlex: '1',
    WebkitFlex: '1',
    msFlex: '1',
    flex: '1',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '25px',
    fontWeight: '400',
    textDecoration: 'none',
    color: '#000000'
  }
  const navLinksRight = {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    marginBottom: '5%',
    WebkitFlex: '0 auto',
    WebkitBoxFlex: '0',
    msFlex: '0 auto',
    listStyleType: 'none',
    marginTop: '2%',
    paddingLeft: '3%'
  }

  const navLink4 = {
    textDecoration: 'none',
    color: '#000000',
  }

  const link4 = {
  }

  return (
    <React.Fragment>
      <div style={navBar} id='navBar'>
        <ul style={navLinksLeft} id='navLinksLeft'>
          <li style={link1}> <Link to='/about' style={navLink2}> About </Link> </li>
          <li style={link2}> <Link to='/projects' style={navLink}> Projects </Link> </li>
          <li style={link3}> <Link to='/contact' style={navLink3}> Contact </Link> </li>
        </ul>
        <a href='/' style={heading} title='Homepage'> <p> Masha Ivy </p></a>
        <ul style={navLinksRight} id='navLinksRight'>
          <li style={link4}> <a href='https://www.linkedin.com/in/masha-ivy/' style={navLink4}> L </a> </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Header
