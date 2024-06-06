import React from 'react';
import './Footer.css';
import AppContext from '../App/AppContext';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
  const { isLoggedIn } = React.useContext(AppContext);

    return (
      <div className='App-footer'>
        {isLoggedIn && <p>
            <a href='/contact'>Contact us</a>
          </p>}
        <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
      </div>
    );
}

export default Footer;
