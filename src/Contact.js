import React from "react";
import { Link } from "react-router-dom";
import Img4 from "./Img4";

function Contact() {
  const contact = {
    zIndex: "2",
    width: "auto",
    position: "absolute",
    left: "550px",
    top: "150px",
  };

  const inline = {
    overflow: "hidden",
    listStyleType: "none",
  };

  const li = {
    paddingLeft: "80px",
    float: "right",
  };

  const astyle = {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
  };

  const link = {
    textDecoration: "none",
    color: "#cec9c9",
  };

  const num = {
    position: "relative",
    fontSize: "40px",
    top: "10px",
    left: '120px',
    width: '400px'
  };

  const links = {
    fontSize: "50px",
  };

  const text = {
    position: "relative",
    fontSize: '30px',
    top: "400px",
    left: '120px'
  };
  return (
    <React.Fragment>
      <div style={contact}>
        <ul style={inline}>
          <li style={li}>
            <a
              style={astyle}
              href="https://www.linkedin.com/in/masha-ivy/"
              style={link}
            >
              <h3 style={links} className='links'> LINKEDIN </h3>
            </a>
          </li>
          <li style={li}>
            <a style={astyle} href="mailto:mashaivy9@gmail.com" style={link}>
              <h3 style={links} className='links'> EMAIL </h3>
            </a>
          </li>
        </ul>

        <p style={text} className={text}> let's collaborate!</p>
        <p style={num} className='num'>(971)-325-9987</p>
      </div>

      <Img4 />
    </React.Fragment>
  );
}

export default Contact;
