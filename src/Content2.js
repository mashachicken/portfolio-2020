import React from "react";

function Content2() {
  const fontStyle = {
    top: "1000px",
    lineHeight: "130%",
    zIndex: "2",
    float: "right",
    position: "absolute",
    paddingRight: "1%",
    width: "46%",
    fontSize: "30px",
    paddingLeft: "50%"
  };

  const font = {
    width: "100%",
  };

  const line2 = {
    opacity: ".7",
    fontStyle: "italic",
  };

  const line3 = {
    opacity: ".7",
    fontStyle: "italic",
  };

  return (
    <React.Fragment>
      <div style={fontStyle} className="fontStyle2">
        <div style={font}>
          <div>IF MY WORK INTERESTS YOU, I HAVE GOOD NEWS!</div>
          <div style={line2}>
            I'M NOW LOOKING FOR FULL-TIME POSITIONS IN PORTLAND
          </div>
          <div style={line3}> AS WELL AS OTHER EXCITING PROJECTS.</div>
          <div>
            PLEASE FEEL FREE TO REACH OUT AT A TIME OF YOUR CONVINIENCE.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content2;
