import React from 'react';
import { Link } from "react-router-dom";
import Img4 from './Img4'

function Contact(){

  const contact = {
    lineHeight: '130%',
    zIndex: '2',
    paddingRight: '2%',
    width: 'auto',
    listStyleType: 'none',
    float: 'right',
  }

  const link = {
    textDecoration: 'none',
    color: '#cec9c9',
    marginRight: '13cm'

  }
  return (
    <React.Fragment>
    <div style={contact}>
      <li> <a href='mailto:mashaivy9@gmail.com' style={link}> <h3> EMAIL </h3> </a></li>
      <li> <a href='https://www.linkedin.com/in/masha-ivy/' style={link}> <h3> LINKEDIN </h3> </a> </li>
    </div>
    <Img4/>
    </React.Fragment>
  );
}
export default Contact
