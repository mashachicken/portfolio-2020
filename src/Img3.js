import React from 'react';


function Img3() {

  const img = {
    marginTop: '0%',
    paddingLeft: '5%',
    marginRight: '2%',
    width: '450px',
    height: '540px',
    zIndex: '-1',
    float: 'right'
  }

  return (
    <React.Fragment>
      <div>
        <figure className='picture'>
          <img src='/art3.jpg' style={img} className='img3'/>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Img3
