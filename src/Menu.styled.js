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
  margin-left: -15%;
  position: absolute;
  top: 0;
  width: 50%;
  z-index: 1;
  font-size: 1.5rem;
  left: 0;
  color: #cec9c9 !important;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #0D0C1D;
    text-decoration: none;
    list-style: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }

  .headName {
    margin-top: -50%;
    margin-bottom: 30%;
    border-bottom: 1.5px solid white;
    margin-left: -7%;

  }

  ul {
    list-style: none;
  }

  ul li {
    width: 5cm;
  }

  ul li a i {
    background: #205D7A;
    color: #cec9c9;
    padding-left: 2px;
    font-size: 17px;
    text-align: center;
  }

  .fa-linkedin {
    background:#007bb6;
  }

  .fa-envelope {
    background:#007bb6;
  }

  .social {
    display: flex;
    padding-top: 45%;
    padding-left: 10px;
  }

  .linkedin {
    width: 50px;
  }

}
@media only screen and (min-width: 480px) {
    display: none;
}
`;
