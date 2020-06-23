import React from 'react';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
@media only screen and (max-width: 480px) {
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  width: 50%;
  font-size: 1.5rem;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #0D0C1D;
    text-decoration: none;
    list-style: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }

  .headName {
    float: right
  }

  ul {
    list-style: none;

  }

  ul li {
    width: 5cm;
  }
  ul li a i {
    background: #205D7A;
    color: #fff;
    width: 20px;
    height: 20px;
    padding-left: 2px;
    font-size: 17px;
    text-align: center;
  }

  .fa-linkedin {
    background:#007bb6 !important
  }



}
@media only screen and (min-width: 480px) {
    display: none;
}
`;
