import React from "react";
import { Link } from "react-router-dom";
import Img3 from "./Img3";

function About() {
  const about = {
    lineHeight: "130%",
    zIndex: "2",
    paddingLeft: "5%",
    paddingBottom: "5%",
    width: "50%",
    textAlign: 'justify',
    fontSize: '30px'
  };

  const mainText = {
    paddingTop: '30px',
    opacity: '.7'
  }

  const block = {

    marginBottom: '30px'
  }

  return (
    <React.Fragment>
      <Img3 />
      <div style={about} className="about">
          <h2><i>Hello there!</i></h2><h3> Let me tell you a little bit about who I am.</h3>
          <div style={mainText}>
           <div style={block}> I'm an <strong>insighful</strong> and
          <strong> open minded</strong> individual that loves traveling, meeting
          new diverse people, and writing <strong> code</strong>.</div>
          <div style={block}> While I've always been fascinated by tenchnology, it wasn't until a little over a year ago that discovered  my
          passion for <strong> coding</strong>. I started my path in a coding bootcamp in
          Portland, <strong> Epicodus</strong>. There, I learned to use the best
          programming practises to <strong> build, design, and test </strong>
          applications in <strong> JavaScript & React</strong>, and even
          <strong> Ruby</strong>! I then interned at Goalden Hour, where I
          designed and added new features to a planning app.</div> With all that
          expirience, I'm now proud to say that I <strong> love</strong> what I
          do, and can utilize my <strong> creativity</strong> in a profession of
          my dreams. I'm now living/self-isolating in <strong> Portland </strong>
          and looking for job opportunities. I hope to chat with you!
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
