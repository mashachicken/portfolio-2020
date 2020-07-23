import React from 'react';
import { Link } from "react-router-dom";
import Img3 from './Img3'

function About(){
const about = {
  lineHeight: '130%',
  zIndex: '2',
  paddingLeft: '5%',
  width: '50%'


}
  return (
    <React.Fragment>
    <Img3/>
    <div style={about} classNane='about'>
      <h3> Hello there! Let me tell you a little bit about who <strong>I am</strong>. I'm an <strong>insighful</strong> and <strong>open minded</strong> individual that loves traveling, meeting new diverse people, and writing <strong>code</strong>. While I first started my career in a sales field, where I couldnt realize my interest for <strong>technology</strong>, I quickly discovered my passion for coding. I started my path in a coding bootcamp in Portland, <strong>Epicodus</strong>. There, I learned to use the best programming practises to <strong> build, design, and test</strong> applications in <strong>JavaScript & React</strong>, and even <strong>Ruby</strong>! I then interned at Goalden Hour, where I designed and added new features to a planning app. With all that expirience, I'm now proud to say that I <strong>love</strong> what I do, and can utilize my <strong>creativity</strong> in a profession of my dreams. I'm now living/self-isolating in <strong>Portland</strong> and looking for job opportunities. I hope to chat with you! </h3>
    </div>
    </React.Fragment>
  );
}
export default About
