import React from 'react';


function Img1() {
  const pic = {
    zIndex: '1',
    background: 'none',
    marginTop: '15%',
    position: 'relative'
  }

  const img = {
    marginTop: '-3%',
    marginRight: '8%',
    width: '440px',
    height: '540px',
    zIndex: '-1',
    float: 'right',
  }

  return (
    <React.Fragment>
      <div>
        <figure style={pic} className='picture'>
          <img src='/art.jpg' style={img} className='img'/>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Img1
