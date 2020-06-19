import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {

  // const burgerStyle = {
    //   position: 'absolute',
    //   top: '5%',
    //   left: '2rem',
    //   zIndex: '1',
    //   display: 'none',
    //   flexDirection: 'column',
    //   justifyContent: 'space-around',
    //   width: '2rem',
    //   height: '2rem',
    //   background: 'transparent',
    //   border: 'none',
    //   cursor: 'pointer',
    //   padding: '0'
    // }
    //
    // const div = {
      //   width: '2rem',
      //   height: '0.25rem',
      //   background: 'black',
      //   borderRadius: '10px',
      //   transition: 'all 0.3s linear',
      //   position: 'relative',
      //   transformOrigin: '1px'
      // }
        return (
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div className="mobileBurger">
            <div/>
            <div/>
            <div/>
          </div>
          </StyledBurger>
        )
      }
    Burger.propTypes = {
      open: bool.isRequired,
      setOpen: func.isRequired,
    };

    export default Burger;
