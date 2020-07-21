import React from 'react';


function Content2() {
  const fontStyle = {

    marginTop: '15%',
    lineHeight: '130%',
    float: 'right',

    width: '55%',
    fontSize: '35px'

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
        <div style={fontStyle} className='fontStyle2'>
      <div style={line1}>If my work interests you, I have good news!</div> <div style={line2}>  I'm now looking for full-time positions in Portland,</div> <div style={line3}> as well as other exciting projects.</div> <div style={line4}> Please feel free to reach out at a time of your convinience.</div>
          </div>
    </React.Fragment>
  )
}

export default Content2
