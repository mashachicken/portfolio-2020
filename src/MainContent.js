import React from 'react';


function MainContent() {
  const pic = {
    zIndex: '1',
    background: 'none',
    marginTop: '15%'
  }

  const img = {
    marginTop: '-3%',
    marginRight: '10%',
    width: '33%',
    height: '540px',
    zIndex: '1',
    float: 'right',
  }

  return (
    <React.Fragment>
      <div>
        <figure style={pic} className='picture'>
          <img src='/art.jpg' style={img}/>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default MainContent
