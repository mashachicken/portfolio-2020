import React from "react";

function Circle() {
  const circle = {
    height: "153px",
    width: "150px",
    
  };

  return (
    <React.Fragment>
      <div className="scrolld">
        <img src="/masha-cirlce.png" style={circle} className='circle'/>
      </div>
    </React.Fragment>
  );
}

export default Circle;
