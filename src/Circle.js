import React from "react";

function Circle() {
  const circle = {
    height: "153px",
    width: "150px",
  };

  const scroll = {};

  return (
    <React.Fragment>
      <div className="scrolld" style={scroll}>
        <img src="/masha-cirlce.png" style={circle} />
      </div>
    </React.Fragment>
  );
}

export default Circle;
