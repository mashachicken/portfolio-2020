import React from 'react';


function Img2() {
  const pic = {
    zIndex: '1',
    background: 'none',
    marginTop: '50%',
    position: 'relative'
  }

  const img = {

    paddingLeft: '5%',
    width: '450px',
    height: '540px',
    zIndex: '-1',
    float: 'left',
  }

  return (
    <React.Fragment>
      <div>
        <figure style={pic} className='picture'>
          <img src='/art2.jpg' style={img} className='img2'/>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Img2
