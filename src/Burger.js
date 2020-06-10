import React from 'react';

function Burger() {
  const burgerStyle = {
    position: 'absolute',
    top: '5%',
    left: '2rem',
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '2rem',
    height: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    zIndex: '10'
  }

  const div = {
    width: '2rem',
    height: '0.25rem',
    background: 'black',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px'
  }

  return (
    <React.Fragment>
        <button type='button' className='burgerButton' style={burgerStyle}>
          <div style={div}/>
          <div style={div}/>
          <div style={div}/>
        </button>
    </React.Fragment>
  )
}

export default Burger;
