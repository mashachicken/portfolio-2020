import React from 'react';
import { Link } from "react-router-dom";
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const MobileMenue = ({ open, setOpen }) => {

  return (
    <React.Fragment>
      <StyledMenu open={open}>
        <div className='mobileNav'>
          <ul id='navLinksLeft'>
            <div className='headName'>
              <li> <Link to='/' title='Homepage' onClick={() => setOpen(!open)}> <h6 className='masha'> &nbsp; &nbsp; Masha Ivy </h6></Link> </li>
            </div> <br/> <br/>
            <li className='link'> <Link to='/about' onClick={() => setOpen(!open)}>About</Link> </li><br/><br/><br/>
            <li className='link'> <Link to='/projects' onClick={() => setOpen(!open)}>&nbsp;&nbsp;&nbsp; Projects </Link> </li><br/><br/><br/>
            <li className='link'> <Link to='/contact' onClick={() => setOpen(!open)}>&nbsp;&nbsp; Contact </Link> </li><br/> <br/><br/><br/>
            <div className='social'>
              <li className='linkedin'> <a href='https://www.linkedin.com/in/masha-ivy/'><i className="fa fa-linkedin"></i> </a> </li><br/> <br/>
              <li> <a href='mailto:mashaivy9@gmail.com' className='email'> <i className="fa fa-envelope"></i> </a></li><br/>
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
