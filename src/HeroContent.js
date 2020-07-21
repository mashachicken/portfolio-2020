import React from 'react';


function HeroContent() {
  const fontStyle = {
    marginTop: '10%',
    lineHeight: '130%',
    zIndex: '2',
    paddingLeft: '5%',
    position: 'absolute',
    width: '120%',
    fontSize: '48px',
    textShadow: '0 0 4px #CEC9C9, 0 0 20px rgba(206,201,201,0.42)'

  }

  const line2 ={
    opacity: '.7',
    fontStyle: 'italic'
  }

  const line1 ={

  }

  const line3 ={
    opacity: '.7',
    fontStyle: 'italic'

  }

  const line4 ={
  }


  return (
    <React.Fragment>
        <div style={fontStyle} className='fontStyle'>
      <div style={line1}> Hello! I'm Masha, a creative web developer</div> <div style={line2}>  and designer from Portland, OR,</div> <div style={line3}> inspired to create innovative websites</div> <div style={line4}> with aesthetically pleasing designs.</div>
          </div>
    </React.Fragment>
  )
}

export default HeroContent
