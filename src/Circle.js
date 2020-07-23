import React from 'react';


function Circle() {

    const circle = {
      height: '700px',
      width: '730px',
      zIndex: '-1',

    }

    const scroll = {
      zIndex: '-1',
      width: '30%',
    }
  return (
    <React.Fragment>
      <div className="scrolld" style={scroll}>
        <img src='/masha-cirlce.png' style={circle}/>
      </div>
      </React.Fragment>
    )
  }

  export default Circle
