import React from 'react';


function Img2() {

  const img = {
    zIndex: '1',
    background: 'none',
    top: '50vw',
    position: 'relative',
    paddingLeft: '5%',
    width: '450px',
    height: '540px',
    zIndex: '-1',
    float: 'left',
    paddingBottom: '7%'
  }

  return (
    <React.Fragment>
      <div>
        <figure className='picture'>
          <img src='/art2.jpg' style={img} className='img2'/>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Img2
