import React from 'react';
import { Link } from "react-router-dom";

function Header(){
  const navLinksLeft = {
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
    textAlign: 'center',

  }
  const list1 = {

  }
  const navLinks = {

  }
  const navLink = {
    textDecoration: 'none'
  }
  const navLink2 = {
    textDecoration: 'none'
  }
  const list2 = {

  }
  const list3 = {

  }
  const navLink3 = {
    textDecoration: 'none'
  }

  const heading = {
    display: '-webkit-box',
    display: '-webkit-fle',
    display: '-ms-flexbox',
    display: 'flex; width: 25%',
    margin: '0px 10% 5%',
    WebkitBoxOrient: 'horizontal',
    WebkitBoxDirection: 'normal',
    WebkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
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
    textDecoration: 'none'
  }
  const navLinksRight = {

  }
  const list4 = {

  }

  return (
    <React.Fragment>
      <div style={navLinks}>
        <ul style={navLinksLeft}>
          <li style={list1}> <Link to='/about' style={navLink}> About </Link> </li>
          <li style={list2}> <Link to='/projects' style={navLink2}> Projects </Link> </li>
          <li style={list3}> <Link to='/contact' style={navLink3}> Contact </Link> </li>
        </ul>
        <a href='/' style={heading} title='Homepage'> <h6 style={heading}> Masha Ivy </h6></a>
        <ul style={navLinksRight}>
          <li style={list4}> <a href='https://www.linkedin.com/in/masha-ivy/'> L </a> </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Header
