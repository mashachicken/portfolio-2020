import React from 'react';
import { Link } from "react-router-dom";
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const MobileMenue = ({ open, setOpen }) => {

  return (
    <React.Fragment>
      <StyledMenu open={open} open={open}>
        <div className='mobileNav'>
          <ul id='navLinksLeft'>
            <li> <Link to='/about' className='link' className='link' onClick={() => setOpen(!open)}> <span class='emoj' role="img" aria-label="about us">&#x1f481;</span> About</Link> </li>
            <li> <Link to='/projects' className='link' onClick={() => setOpen(!open)}> <span class='emoj' role="img" aria-label="projects">&#x1F4C1;</span> Projects </Link> </li>
            <li> <Link to='/contact' className='link' onClick={() => setOpen(!open)}> <span class='emoj' role="img" aria-label="contact">&#x1f4e9;</span>Contact </Link> </li>
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
  setOpen: func.isRequired,
}

export default MobileMenue
