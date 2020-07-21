import React from 'react';


function Img3() {
  const pic = {
    background: 'none',
    position: 'relative'
  }

  const img = {
    marginTop: '0%',
    marginRight: '2px',
    width: '450px',
    height: '540px',
    zIndex: '-1',
    float: 'right'
  }

  return (
    <React.Fragment>
      <div>
        <figure style={pic} className='picture'>
          <img src='/art3.jpg' style={img} className='img'/>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Img3
