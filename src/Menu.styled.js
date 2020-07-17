import styled from 'styled-components';

export const StyledMenu = styled.nav`
@media only screen and (max-width: 480px) {
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #cec9c9;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  margin-left: -15%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  left: 0;
  color: black !important;
  transition: transform 0.3s ease-in-out;

  a {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: black;
    text-decoration: none;
    list-style: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }

  .headName {
    margin-top: 10%;
    margin-bottom: 30%;
    border-bottom: 1.5px solid rgba(100, 100, 100, 0.3);
    margin-left: -7%;
    font-size: 1.8rem;
    text-align: center;
  }

  .masha {
    font-size: 1.5rem;
    padding-bottom: 10px;
  }

  ul {
    list-style: none;
  }

  ul li {
    width: 5cm;
    font-size: 1.6rem;

  }

  ul li a i {
    background: #205D7A;
    color: #cec9c9;
    padding-left: 2px;
    font-size: 17px;
    text-align: center;

  }

  .fa-linkedin {
    background: rgb(0, 123, 182);
  }

  .fa-envelope {
  
  }

  .social {
    display: flex;
    padding-top: 35%;

  }

  .linkedin {
 margin-right: -35%;
  }

  .email {


  }

}
@media only screen and (min-width: 480px) {
    display: none;
}
`;
