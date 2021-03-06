import React from 'react';
import Circle from './Circle'

function HeroContent() {
  const fontStyle = {
    top: '280px',
    lineHeight: '140%',
    zIndex: '2',
    paddingLeft: '5%',
    position: 'absolute',
    fontSize: '48px',
    textShadow: '0 0 4px #CEC9C9, 0 0 20px rgba(206,201,201,0.42)'

  }

  const line2 ={
    opacity: '.7',
    fontStyle: 'italic'
  }

  const line3 ={
    opacity: '.7',
    fontStyle: 'italic'

  }

  return (
    <React.Fragment>
        <div style={fontStyle} className='fontStyle'>
      <div> HELLO! I'M MASHA, A CREATIVE WEB DEVELOPER</div> <div style={line2}> AND DESIGNER FROM PORTLAND, OR,</div> <div style={line3}> INSPIRED TO CREATE INNOVATIVE WEBSITES</div> <div> WITH AESTHETICALLY PLEASING DESIGNS.</div>
          </div>
          <Circle/>
    </React.Fragment>
  )
}

export default HeroContent
