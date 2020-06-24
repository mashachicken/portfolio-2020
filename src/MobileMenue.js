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
            <li> <Link to='/' title='Homepage' className='headName' onClick={() => setOpen(!open)}> <h6 className='name'> Masha Ivy </h6></Link> </li>
            <li> <Link to='/about' className='link' className='link' onClick={() => setOpen(!open)}> <span class='emoj' role="img" aria-label="about us">&#x1f481;</span> About</Link> </li><br/>
            <li> <Link to='/projects' className='link' onClick={() => setOpen(!open)}> <span class='emoj' role="img" aria-label="projects">&#x1F4C1;</span> Projects </Link> </li><br/>
            <li> <Link to='/contact' className='link' onClick={() => setOpen(!open)}> <span class='emoj' role="img" aria-label="contact">&#x1f4e9;</span>Contact </Link> </li><br/> <br/>
            <div className='social'>
              <li className='linkedin'> <a href='https://www.linkedin.com/in/masha-ivy/'><i class="fa fa-linkedin"></i> </a> </li><br/> <br/>
              <li> <a href='mailto:mashaivy9@gmail.com' className='email'> <i class="fa fa-envelope"></i> </a></li><br/>
            </div>
          </ul>
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
