import React from 'react';
import { Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const MobileMenue = ({ open }) => {

  // const Nav = styled.nav`
  // .link {
  //   font-size: 1rem;
  //   text-transform: uppercase;
  //   padding: 2rem;
  //   font-weight: bold;
  //   letter-spacing: 0.3rem;
  //   text-decoration: none;
  //   transition: color 0.3s linear;
  //   color: black;
  // }
  //
  //  .mobileNav {
  //   display: none;
  // }
  //
  //   .headName {
  //   whiteSpace: nowrap;
  //   textTransform: uppercase;
  //   fontWeight: bold;
  //   letterSpacing: 0.5rem;
  //   textDecoration: none;
  //   transition: color 0.3s linear;
  //   color: black;
  //   position: fixed;
  //   display: -webkit-flex;
  //   display: -ms-flexbox;
  //   display: flex;
  //   width: 92%;
  //   marginTop: 2%;
  //   marginRight: 2%;
  //   marginLeft: 2%;
  //   webkitBoxOrient: horizontal;
  //   webkitFlex-direction: row;
  //   ms-flex-direction: row;
  //   flex-direction: row;
  //   webkit-box-pack: center;
  //   webkit-justify-content: center;
  //   ms-flex-pack: center;
  //   justify-content: center;
  //   webkit-flex-wrap: wrap;
  //   flexWrap: wrap;
  //   WebkitBoxAlign: end;
  //   WebkitAlignItems: flex-end;
  //   msFlexAlign: end;
  //   alignItems: flex-end;
  //   gridAutoColumns: 1fr;
  //   gridColumnGap: 16px;
  //   gridRowGap: 16px;
  //   textAlign: cente
  //
  // }
  //
  //  navLinksLeft = {
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   listStyleType: 'none',
  //   height: '100vh',
  //   background: '#b8b8b8',
  //   position: 'absolute',
  //   padding: '2rem',
  //   padding: '0',
  //   width: '120px',
  //   textAlign: 'left',
  //   zIndex: '-1',
  //   paddingTop: '50%',
  //   lineHeight: '79px',
  //   transition: 'transform 0.3s ease-in-out'
  // }

  return (
    <React.Fragment>
      <StyledMenu open={open}>
        <div className='mobileNav'>
          <ul id='navLinksLeft'>
            <li> <Link to='/about' className='link'> <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>About </Link> </li>
            <li> <Link to='/projects' className='link'> <span role="img" aria-label="projects">&#x1F4C1;</span>Projects </Link> </li>
            <li> <Link to='/contact' className='link'> <span role="img" aria-label="contact">&#x1f4e9;</span>Contact </Link> </li>
            <li> <a href='https://www.linkedin.com/in/masha-ivy/' className='link'><i class="fa fa-linkedin"></i> </a> </li>
          </ul>
          <a href='/' title='Homepage' className='headName'> <h6 className='name'> Masha Ivy </h6></a>
        </div>
        </StyledMenu>
    </React.Fragment>
  );
}

MobileMenue.propTypes = {
  open: bool.isRequired,
}

export default MobileMenue
