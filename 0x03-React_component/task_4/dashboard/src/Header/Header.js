import React from 'react';
import './Header.css';
import Logo from '../assets/HolbertonLogo.jpg';

function Header() {
  return (
    <div className='App-header'>
      <img src={Logo} className='App-logo' alt='Holberton Logo' />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
