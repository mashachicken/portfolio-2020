import React from 'react';


function Img4() {
  const img = {
    width: '450px',
    height: '540px',
    paddingLeft: '5%'
  }

  return (
    <React.Fragment>
      <div>
          <img src='/art44.jpeg' style={img} className='img4'/>
      </div>
    </React.Fragment>
  )
}

export default Img4
