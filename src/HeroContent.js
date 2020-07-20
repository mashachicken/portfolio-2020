import React from 'react';


function Img1() {
  const fontStyle = {

    width: '100%',
    marginTop: '5%',
    lineHeight: '120%',
    zIndex: '2',
    paddingLeft: '7%',
    position: 'absolute',
    width: '75%',
    fontSize: '45px',

  }

  const line2 ={
    opacity: '.7',
  }

  const line1 ={

  }

  const line3 ={
    opacity: '.7',

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

export default Img1
