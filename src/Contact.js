import React from 'react';
import { Link } from "react-router-dom";
import Img4 from './Img4'

function Contact(){

  const contact = {
    zIndex: '2',
    paddingRight: '2%',
    width: 'auto',
    float: 'right',
    paddingLeft: '5%',
    position: 'relative',
    left: '-200px',
    top: '80px'

  }

  const inline = {
      overflow: 'hidden',
      listStyleType: 'none',



  }

  const d = {
    paddingLeft: '80px',
    float: 'right'
  }

  const p = {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none'
}

  const link = {
    textDecoration: 'none',
    color: '#cec9c9',
  }

const num = {
  position: 'relative',
  fontSize: '40px',
  paddingLeft: '20%',
  top: '10px'

}
const methods = {
  fontSize: '50px'
}

const text = {
  position: 'relative',
  top: '200px',
  left: '120px'
}
  return (
    <React.Fragment>
    <div style={contact}>
      <ul style={inline}>
        <li style={d}> <a style={p} href='https://www.linkedin.com/in/masha-ivy/' style={link}> <h3 style={methods}> LINKEDIN </h3> </a> </li>
        <li style={d}> <a style={p} href='mailto:mashaivy9@gmail.com' style={link}> <h3 style={methods}> EMAIL </h3> </a></li>
      </ul>
      <h4 style={text}> LET'S COLLABORATE!</h4>
        <p style={num}>(971)-325-9987</p>
    </div>
    <Img4/>
    </React.Fragment>
  );
}
export default Contact
